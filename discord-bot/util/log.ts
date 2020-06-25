import { stringish } from './string.ts';

const logged = new Map();

// every hour
const ONE_HOUR = 1000 * 60 * 60;
setInterval(() => logged.clear(), ONE_HOUR);

export function logOnce(value: stringish) {
	const text = String(value);

	if (!logged.has(text)) {
		logged.set(text, true);
		console.log(text);
	}
}
