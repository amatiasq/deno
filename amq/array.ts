import { random } from './math.ts';

export function arrayOfLength(length: number) {
	return new Array(length).fill(null);
}

export function randomItem<T>(list: T[]) {
	return list[random(list.length - 1)];
}

export function first<T>(array: T[]) {
	return array[0];
}
