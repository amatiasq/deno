import assert from './assert.ts';
import { test } from './test.ts';
import { lulas } from '../lulas.ts';

test('Should render something', () => {
	const canvas = document.querySelector('canvas');
	lulas(canvas);
	assert(!isCanvasBlank(canvas));

	function isCanvasBlank(canvas: HTMLCanvasElement) {
		return canvas
			.getContext('2d')
			.getImageData(0, 0, canvas.width, canvas.height)
			.data.some((channel: any) => channel !== 0);
	}
});
