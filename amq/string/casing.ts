const CAMEL_CASE = /^[a-z][a-z0-9]*([A-Z][a-z0-9]*)*$/;
const SNAKE_CASE = /^[a-z][a-z0-9]*(_[a-z0-9]*)*$/;
const PASCAL_CASE = /^([A-Z][a-z0-9]*)+$/;

export function isCamelCase(identifier: string) {
	return CAMEL_CASE.test(identifier);
}

export function isPascalCase(identifier: string) {
	return PASCAL_CASE.test(identifier);
}

export function isSnakeCase(identifier: string) {
	return SNAKE_CASE.test(identifier);
}

export function camelCaseToPascalCase(identifier: string) {
	return `${identifier[0].toUpperCase()}${identifier.slice(1)}`;
}

export function pascalCaseToCamelCase(identifier: string) {
	return `${identifier[0].toLowerCase()}${identifier.slice(1)}`;
}

export function camelCaseToSnakeCase(identifier: string) {
	return identifier.replace(/[A-Z]/g, x => `_${x.toLowerCase()}`);
}

export function snakeCaseToCamelCase(identifier: string) {
	return identifier.replace(/_(.)/g, (_, x) => x.toUpperCase());
}

export function pascalCaseToSnakeCase(identifier: string) {
	return camelCaseToSnakeCase(pascalCaseToCamelCase(identifier));
}

export function snakeCaseToPascalCase(identifier: string) {
	return camelCaseToPascalCase(snakeCaseToCamelCase(identifier));
}

export function renameObjectKeys(transformer: (key: string) => string) {
	return renameKeys;

	function renameKeys<U extends KeyedObject>(target: KeyedObject): U;
	function renameKeys<U extends KeyedObject>(target: KeyedObject[]): U[];
	function renameKeys<U extends KeyedObject = KeyedObject>(
		target: KeyedObject | KeyedObject[],
	) {
		if (Array.isArray(target)) {
			return target.map(x => renameKeys(x)) as U[];
		}

		if (target == null || target.constructor !== Object) {
			return target;
		}

		return Object.keys(target).reduce((result, key) => {
			result[transformer(key)] = renameKeys(target[key]);
			return result;
		}, {} as KeyedObject);
	}
}

export function renamePropertyDescriptors(
	transformer: (key: string) => string,
) {
	const transformDescriptors = renameObjectKeys(transformer);
	return renameDescriptors;

	function renameDescriptors<U extends KeyedObject>(target: KeyedObject): U;
	function renameDescriptors<U extends KeyedObject>(target: KeyedObject[]): U[];
	function renameDescriptors<U extends KeyedObject = KeyedObject>(
		target: KeyedObject | KeyedObject[],
	) {
		if (Array.isArray(target)) {
			return target.map(x => renameDescriptors(x)) as U[];
		}

		if (target == null) {
			return target;
		}

		const prototype = Object.getPrototypeOf(target);
		const descriptors = Object.getOwnPropertyDescriptors(target);
		return Object.create(prototype, transformDescriptors(descriptors));
	}
}

interface KeyedObject {
	[key: string]: any;
}
