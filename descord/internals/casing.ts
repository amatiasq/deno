import {
	renameObjectKeys,
	camelCaseToSnakeCase,
	snakeCaseToCamelCase,
} from '../../amq/string/casing.ts';

export const toApiCasing = renameObjectKeys(camelCaseToSnakeCase);
export const fromApiCasing = renameObjectKeys(snakeCaseToCamelCase);
