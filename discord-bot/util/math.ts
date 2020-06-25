export function random(max = 1, min = 0) {
	return Math.round(Math.random() * (max - min) + min);
}
