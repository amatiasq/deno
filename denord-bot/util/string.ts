import { normalize } from '../../amq/string.ts';

const NOT_ALPHANUMERIC_START = /^[^a-zA-Z0-9<>]+/;
const NOT_ALPHANUMERIC_END = /[^a-zA-Z0-9<>]+$/;

export type stringish = string | { toString(): string };

export function remove(text: string, target: stringish) {
	return trim(text.replace(String(target), ''));
}

export function removeStart(text: string, start: string) {
	return trim(text.slice(start.length));
}

export function splitWords(text: string) {
	return text.split(/\s+/g);
}

export function trim(text: string) {
	const normalized = normalize(text);

	return text
		.replace(NOT_ALPHANUMERIC_START, '')
		.replace(NOT_ALPHANUMERIC_END, '');
}
