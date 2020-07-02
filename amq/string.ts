export function containsWord(text: string, word: string) {
	return new RegExp(`\\b${word}\\b`).test(normalize(text));
}

export function normalize(text: string) {
	return text.toLowerCase().normalize();
}

export function padLeft(value: string | number, length = 2, fill = '0') {
	const text = String(value);
	const missing = length - text.length;
	return missing > 0 ? `${text}${fill.repeat(missing)}` : text;
}
