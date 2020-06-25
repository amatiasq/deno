const NOT_ALPHANUMERIC_START = /^[^a-zA-Z0-9<>]+/;
const NOT_ALPHANUMERIC_END = /[^a-zA-Z0-9<>]+$/;

export type stringish = string | { toString(): string };

export function containsWord(text: string, word: string) {
	return new RegExp(`\\b${word}\\b`).test(normalize(text));
}

export function normalize(text: string) {
	return text.toLowerCase().normalize();
}

export function remove(text: string, target: stringish) {
	return trim(text.replace(String(target), ''));
}

export function removeStart(text: string, start: string) {
	return trim(text.slice(start.length));
}

export function splitWords(text: string) {
	return text.split(/\s+/g);
}

export function padLeft(value: string | number, length = 2, fill = '0') {
	const text = String(value);
	const missing = length - text.length;
	return missing > 0 ? `${text}${fill.repeat(missing)}` : text;
}

export function trim(text: string) {
	const normalized = normalize(text);
	const start = normalized.match(NOT_ALPHANUMERIC_START);
	const end = normalized.match(NOT_ALPHANUMERIC_END);
	let result = text;

	if (start) {
		result = result.slice(start[0].length);
	}

	if (end) {
		result = result.slice(0, -end[0].length);
	}

	return result;
}
