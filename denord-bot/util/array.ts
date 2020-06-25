import { random } from './math.ts';

export function array(length: number) {
	return new Array(length).fill(null);
}

export function randomItem<T>(list: T[]) {
	return list[random(list.length - 1)];
}

export function splitWords(text: string) {
	return text.split(/\s+/g);
}

export function wait(seconds: number) {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export function first<T>(array: T[]) {
	return array[0];
}
