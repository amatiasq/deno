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
	const halfSie = getScreenSize().div(2);
	return rectangle(halfSie, halfSie);
}

function getScreenSize() {
	return vector((window as any).innerWidth, (window as any).innerHeight);
}
