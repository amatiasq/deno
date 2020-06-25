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

const HAS_UNDERSCORE_PROP = /(\w+(?:_\w+)+)(\??):/;
const METHODS = /\/\/ METHODS: ..\/extensions\/(\w+).ts/;

console.log(await main());

async function main() {
	const stdin = await Deno.readAll(Deno.stdin);
	const content = new TextDecoder().decode(stdin);
	return transform(content);
}

function transform(content: string) {
	const { name, parent, imports, properties, partials, hasCasing } = parse(
		content,
	);

	const newImports = adaptImports(content, imports, partials, hasCasing);
	const withParsers = PARSEABLE.reduce(
		(x, y, i) => x.replace(new RegExp(`: ${y}`, 'g'), `: ${PARSED[i]}`),
		content,
	);

	let result = withParsers
		.replace(imports, newImports)
		.replace(/Raw(\w+)/g, '$1');

	const extensions = content.match(METHODS);
	if (extensions) {
		result = result
			.replace(
				/interface (\w+) extends (\w+) \{/,
				`interface $1 extends $2, ReturnType<typeof ${extensions[1]}> {`,
			)
			.replace(
				/interface (\w+) \{/,
				`interface $1 extends ReturnType<typeof ${extensions[1]}> {`,
			);
	}

	return `import { Raw${name} } from '../raw/Raw${name}.ts';
${toCamelCase(result)}
${writeFunctions(name, parent, properties, hasCasing)}`;
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
		hasCasing: HAS_UNDERSCORE_PROP.test(content),
	};
}

function adaptImports(
	content: string,
	imports: string,
	partials: string[],
	hasCasing: boolean,
) {
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

	const extension = content.match(METHODS);
	if (extension) {
		list.unshift(
			`import { ${extension[1]} } from '../extensions/${extension[1]}.ts';`,
		);
	}

	if (hasCasing) {
		list.unshift(
			"import { toApiCasing, fromApiCasing } from '../internals/casing.ts';",
		);
	}

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

function writeFunctions(
	name: string,
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
	const unwrapPrps = properties
		.split('\n')
		.filter(x => !METHODS.test(x))
		.join('\n');

	const wrapBody = writeWrap(parent, properties, hasCasing);
	const unwrapBody = writeUnwrap(parent, unwrapPrps, hasCasing);
	const wrapPartialBody = writeWrapPartial(parent, properties, hasCasing);
	const unwrapPartialBody = writeUnwrapPartial(parent, unwrapPrps, hasCasing);

	const isWrapSimple = wrapBody.match(/^return (\w+)\(x\);$/);
	const isUnwrapSimple = unwrapBody.match(/^return (\w+)\(x\);$/);

	return `
export ${
		isWrapSimple
			? `const wrap${name} = ${isWrapSimple[1]} as (x: Raw${name}) => ${name};`
			: `function wrap${name}(x: Raw${name}): ${name} {\n\t${wrapBody}\n}`
	}

export ${
		isUnwrapSimple
			? `const unwrap${name} = ${isUnwrapSimple[1]} as (x: ${name}) => Raw${name};`
			: `function unwrap${name}(x: ${name}): Raw${name} {\n\t${unwrapBody}\n}`
	}

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

function writeWrap(parent: string, properties: string, hasCasing: boolean) {
	const parse = wrapConversor('parse', toCamelCase, identity);
	const wrap = wrapConversor('wrap', toCamelCase, identity);

	const props = serialization(properties, parse, wrap);
	const child = parent
		? `wrap${parent}(x)`
		: hasCasing
		? 'fromApiCasing(x)'
		: 'x';

	return buildBody(child, props);
}

function writeUnwrap(parent: string, properties: string, hasCasing: boolean) {
	const unparse = wrapConversor('unparse', identity, toCamelCase);
	const unwrap = wrapConversor('unwrap', identity, toCamelCase);

	const props = serialization(properties, unparse, unwrap);
	const child = parent
		? `unwrap${parent}(x)`
		: hasCasing
		? 'toApiCasing(x)'
		: 'x';

	return buildBody(child, props);
}

function writeWrapPartial(
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
	const parse = forceOptional(wrapConversor('parse', toCamelCase, identity));
	const wrap = forceOptional(wrapConversor('wrap', toCamelCase, identity));

	const props = serialization(properties, parse, wrap);
	const child = parent
		? `wrap${parent}(x)`
		: hasCasing
		? 'fromApiCasing(x)'
		: 'x';

	return buildBody(child, props);
}

function writeUnwrapPartial(
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
	const unparse = forceOptional(
		wrapConversor('unparse', identity, toCamelCase),
	);
	const unwrap = forceOptional(
		wrapConversor('unwrap', identity, toCamelCase),
	);

	const props = serialization(properties, unparse, unwrap);
	const child = parent
		? `unwrap${parent}(x)`
		: hasCasing
		? 'toApiCasing(x)'
		: 'x';

	return buildBody(child, props);
}

function buildBody(base: string, props: string) {
	if (!props) {
		return `return ${base};`;
	}

	const propsDef = props.replace(/\n\t/g, '\n\t\t');
	return `return {\n\t\t...${base},\n\t${propsDef}\n\t};`;
}

function serialization(
	properties: string,
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

			if (METHODS.test(line)) {
				return line.replace(METHODS, `...$1(x),`);
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
