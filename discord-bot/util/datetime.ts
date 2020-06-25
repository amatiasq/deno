import { padLeft } from './string.ts';

export function datetime(a = new Date()) {
	return `${date(a)} ${time(a)}`;
}

export function date(date = new Date()) {
	const year = date.getFullYear();
	const month = padLeft(date.getMonth() + 1);
	const day = padLeft(date.getDate());
	return `${year}/${month}/${day}`;
}

export function time(date = new Date()) {
	const hours = date.getHours();
	const minutes = padLeft(date.getMinutes());
	return `${hours}:${minutes}`;
}
