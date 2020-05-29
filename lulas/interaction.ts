/// <reference lib="dom" />

import { vector } from '../amq/math/vector.ts';

let mousePos = vector(-1, -1);

let listenMouseMove = () => {
	listenMouseMove = () => {};
	window.addEventListener('mousemove', (event: MouseEvent) => {
		mousePos = vector(event.clientX, event.clientY);
	});
};

export function mousePosition() {
	listenMouseMove();
	return mousePos;
}
