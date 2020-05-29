/// <reference lib="dom" />

import { rectangle } from '../math/geometry.ts';
import { vector } from '../math/vector.ts';

export function fullscreen(canvas: HTMLCanvasElement) {
	window.addEventListener('resize', resize);
	resize();

	function resize() {
		const screen = getScreenSize();
		canvas.width = screen.x;
		canvas.height = screen.y;
	}
}

export function getScreen() {
	const halfSize = getScreenSize().div(2);
	return rectangle(halfSize, halfSize);
}

function getScreenSize() {
	return vector(window.innerWidth, window.innerHeight);
}
