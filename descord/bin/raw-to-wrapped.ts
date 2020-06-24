const PARSEABLE = [
	'IntentInteger',
	'PermissionInteger',
	'SystemChannelFlagInteger',
	'UserFlagInteger',
	'ISO8601Timestamp',
	'UnixTimestamp',
];
const PARSEABLE_IMPORT = [
	'Intent, ',
	'Permission, ',
	'SystemChannelFlag, ',
	'UserFlag, ',
	'',
	'',
];
const PARSED = [
	'Intent[]',
	'Permission[]',
	'SystemChannelFlag[]',
	'UserFlag[]',
	'Date',
	'Date',
];

console.log(await main());

async function main() {
	const stdin = await Deno.readAll(Deno.stdin);
	const content = new TextDecoder().decode(stdin);
	return transform(content);
}

function transform(content: string) {
	const { name, parent, imports, properties, partials } = parse(content);
	const newImports = adaptImports(name, imports, partials);
	const withParsers = PARSEABLE.reduce(
		(x, y, i) => x.replace(new RegExp(`: ${y}`, 'g'), `: ${PARSED[i]}`),
		content,
	);

	const result = withParsers
		.replace(imports, newImports)
		.replace(/Raw(\w+)/g, '$1');

	return `import { Raw${name} } from '../raw/Raw${name}.ts';
${toCamelCase(result)}
${writeFunctions(name, parent, properties)}`;
}

function writeFunctions(name: string, parent: string, properties: string) {
	const wrapBody = writeWrap(parent, properties);
	const unwrapBody = writeUnwrap(parent, properties);
	const wrapPartialBody = writeWrapPartial(parent, properties);
	const unwrapPartialBody = writeUnwrapPartial(parent, properties);

	return `
export function wrap${name}(x: Raw${name}): ${name} {\n\t${wrapBody}\n}

export function unwrap${name}(x: ${name}): Raw${name} {\n\t${unwrapBody}\n}

export ${
		wrapPartialBody === wrapBody
			? `const wrap${name}Partial = wrap${name} as (x: Partial<Raw${name}>) => Partial<${name}>;`
			: `function wrap${name}Partial(x: Partial<Raw${name}>): Partial<${name}> {\n\t${wrapPartialBody}\n}`
	}

export ${
		unwrapPartialBody === unwrapBody
			? `const unwrap${name}Partial = unwrap${name} as (x: Partial<${name}>) => Partial<Raw${name}>;`
			: `function unwrap${name}Partial(x: Partial<${name}>): Partial<Raw${name}> {\n\t${unwrapPartialBody}\n}`
	}`;
}

function adaptImports(name: string, imports: string, partials: string[]) {
	const list = PARSEABLE.reduce(
		(x, y, i) =>
			x.replace(y, `${PARSEABLE_IMPORT[i]}parse${y}, unparse${y}`),
		imports,
	)
		.replace(
			/import\s*\{\s*Raw(\w+)\s*\}/g,
			'import { $1, wrap$1, unwrap$1 }',
		)
		.split('\n')
		.filter(Boolean);

	const finish = partials.reduce(
		(x, partial) =>
			x.replace(
				new RegExp(`(un)?wrap${partial}(\\b)`, 'g'),
				`$1wrap${partial}, $1wrap${partial}Partial$2`,
			),
		list.join('\n'),
	);

	return `${finish.replace('// https:', '\n// https:')}\n\n`;
}

function parse(content: string) {
	const match = content.match(
		/((?:.|\n)*)export interface Raw(\w+)(?: extends Raw(\w+))? \{((?:.|\n)*)\}/m,
	);

	if (!match) {
		console.error('Interface not found in:\n\n', content);
		Deno.exit(1);
	}

	const partials = content.matchAll(/Partial<Raw(\w+)>/g);

	return {
		imports: match[1],
		name: match[2],
		parent: match[3],
		properties: match[4],
		partials: [...partials].map(x => x[1]),
	};
}

function writeWrap(parent: string, properties: string) {
	const casing = conversor(toCamelCase, identity);
	const parse = wrapConversor('parse', toCamelCase, identity);
	const wrap = wrapConversor('wrap', toCamelCase, identity);
	const props = serialization(properties, casing, parse, wrap);
	const child = parent ? `wrap${parent}(x)` : 'x';
	return buildBody(child, props);
}

function writeUnwrap(parent: string, properties: string) {
	const casing = conversor(identity, toCamelCase);
	const unparse = wrapConversor('unparse', identity, toCamelCase);
	const unwrap = wrapConversor('unwrap', identity, toCamelCase);
	const props = serialization(properties, casing, unparse, unwrap);
	const child = parent ? `unwrap${parent}(x)` : 'x';
	return buildBody(child, props);
}

function writeWrapPartial(parent: string, properties: string) {
	const casing = forceOptional(conversor(toCamelCase, identity));
	const parse = forceOptional(wrapConversor('parse', toCamelCase, identity));
	const wrap = forceOptional(wrapConversor('wrap', toCamelCase, identity));
	const props = serialization(properties, casing, parse, wrap);
	const child = parent ? `wrap${parent}(x)` : 'x';
	return buildBody(child, props);
}

function writeUnwrapPartial(parent: string, properties: string) {
	const casing = forceOptional(conversor(identity, toCamelCase));
	const unparse = forceOptional(
		wrapConversor('unparse', identity, toCamelCase),
	);
	const unwrap = forceOptional(
		wrapConversor('unwrap', identity, toCamelCase),
	);
	const props = serialization(properties, casing, unparse, unwrap);
	const child = parent ? `unwrap${parent}(x)` : 'x';
	return buildBody(child, props);
}

function buildBody(base: string, props: string) {
	return props.length
		? `return {\n\t\t...${base},\n\t${props.replace(
				/\n\t/g,
				'\n\t\t',
		  )}\n\t};`
		: `return ${base};`;
}

function serialization(
	properties: string,
	onCasing: Conversor,
	onSerializable: Conversor,
	onEntity: Conversor,
) {
	return properties
		.split('\n')
		.map(line => {
			if (/^\s+\/\*\*/.test(line)) {
				return;
			}

			if (PARSEABLE.some(x => line.includes(x))) {
				return line.replace(/((?:\w|_)+)(\??): (\w+);/, onSerializable);
			}

			if (/: Raw/.test(line)) {
				return line
					.replace(/((?:\w|_)+)(\??): Raw(\w+);/, onEntity)
					.replace(
						/((?:\w|_)+)(\??): Raw(\w+)\[\];/,
						doArrays(onEntity),
					);
			}

			if (/: Partial<Raw/.test(line)) {
				return line
					.replace(
						/((?:\w|_)+)(\??): Partial<Raw(\w+)>;/,
						doPartial(onEntity),
					)
					.replace(
						/((?:\w|_)+)(\??): Partial<Raw(\w+)>\[\];/,
						doPartial(doArrays(onEntity)),
					);
			}

			if (/(\w+(?:_\w+)+)(\??):/.test(line)) {
				return line.replace(/((?:\w|_)+)(\??): .*;/, onCasing);
			}
		})
		.filter(Boolean)
		.join('\n');
}

// Properties conversors

type Conversor = (
	_: string,
	key: string,
	opt: '?' | '',
	value: string,
) => string;

function wrapConversor(
	prefix: 'parse' | 'unparse' | 'wrap' | 'unwrap',
	transformResult: (_: string) => string,
	transformInput: (_: string) => string,
) {
	return (_: string, key: string, opt: '?' | '', value: string) =>
		`${transformResult(key)}: ${
			opt ? `x.${transformInput(key)} && ` : ''
		}${prefix}${value}(x.${transformInput(key)}),`;
}

function conversor(
	transformResult: (_: string) => string,
	transformInput: (_: string) => string,
) {
	return (_: string, key: string, opt: '?' | '') =>
		`${transformResult(key)}: ${
			opt ? `x.${transformInput(key)} && ` : ''
		}x.${transformInput(key)},`;
}

function identity<T>(x: T) {
	return x;
}

function forceOptional(fn: Conversor): Conversor {
	return (_: string, key: string, opt: '?' | '', value: string) =>
		fn(_, key, '?', value);
}

function doPartial(fn: Conversor): Conversor {
	return (...args) => fn(...args).replace(/(wrap\w+)/, '$1Partial');
}

function doArrays(fn: Conversor): Conversor {
	return (...args) => fn(...args).replace(/(\w+)\((x\..*)\)/, '$2.map($1)');
}

function toCamelCase(value: string) {
	return value.replace(/_(\w)/g, (_, x) => x.toUpperCase());
}
