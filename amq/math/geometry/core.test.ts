import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { assertVector } from '../vector.test.ts';
import { vector, ZERO } from '../vector.ts';
import { circle, rectangle } from './core.ts';

Deno.test('Geometry: circle.position', () => {
	const pos = vector(1, 2);
	const sut = circle(pos, 1);
	assertEquals(sut.position, pos);
});

Deno.test('Geometry: circle.withPosition', () => {
	const pos = vector(1, 2);
	const sut = circle(ZERO, 1);
	assertEquals(sut.withPosition(pos).position, pos);
});

Deno.test('Geometry: circle.radius', () => {
	const rad = 1;
	const sut = circle(ZERO, rad);
	assertEquals(sut.radius, rad);
});

Deno.test('Geometry: circle.withRadius', () => {
	const sut = circle(ZERO, 1);
	assertEquals(sut.withRadius(2).radius, 2);
});

Deno.test('Geometry: circle.start', () => {
	const sut = circle(vector(1, 2), 3);
	assertVector(sut.start, { x: -2, y: -1 });
});

Deno.test('Geometry: circle.end', () => {
	const sut = circle(vector(1, 2), 3);
	assertVector(sut.end, { x: 4, y: 5 });
});

Deno.test('Geometry: rectangle.position', () => {
	const pos = vector(1, 2);
	const sut = rectangle(pos, ZERO);
	assertEquals(sut.position, pos);
});

Deno.test('Geometry: rectangle.withPosition', () => {
	const pos = vector(1, 2);
	const sut = rectangle(ZERO, ZERO);
	assertEquals(sut.withPosition(pos).position, pos);
});

Deno.test('Geometry: rectangle.size', () => {
	const size = vector(1, 2);
	const sut = rectangle(ZERO, size);
	assertEquals(sut.size, size);
});

Deno.test('Geometry: rectangle.withSize', () => {
	const size = vector(1, 2);
	const sut = rectangle(ZERO, ZERO);
	assertEquals(sut.withSize(size).size, size);
});

Deno.test('Geometry: rectangle.start', () => {
	const sut = rectangle(vector(1, 2), vector(3, 4));
	assertVector(sut.start, { x: -2, y: -2 });
});

Deno.test('Geometry: rectangle.end', () => {
	const sut = rectangle(vector(1, 2), vector(3, 4));
	assertVector(sut.end, { x: 4, y: 6 });
});
