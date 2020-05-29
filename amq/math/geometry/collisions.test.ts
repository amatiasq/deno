import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { Vector, vector, ZERO } from './../vector.ts';
import { circle, rectangle, Geometry } from './../geometry.ts';
import { detectCollision, contains } from './collisions.ts';

const contact = [
	vector(-1, -1),
	vector(-1, 0),
	vector(-1, 1),
	vector(0, -1),
	vector(0, 1),
	vector(1, -1),
	vector(1, 0),
	vector(1, 1),
	vector(-2, 0),
	vector(2, 0),
	vector(0, -2),
	vector(0, 2),
];

const contactRects = [
	vector(-2, -2),
	vector(-2, 2),
	vector(2, -2),
	vector(2, 2),
];

const noContact = [
	vector(-4, -4),
	vector(-4, 0),
	vector(-4, 4),
	vector(0, -4),
	vector(0, 4),
	vector(4, -4),
	vector(4, 0),
	vector(4, 4),
];

test(detectCollision, createCircle(ZERO), createCircle(ZERO), true);
test(contains, createCircle(ZERO), createCircle(ZERO), true);

for (const pos of contact) {
	test(detectCollision, createCircle(ZERO), createCircle(pos), true);
	test(detectCollision, createCircle(ZERO), createRect(pos), true);
	test(detectCollision, createRect(ZERO), createCircle(pos), true);
	test(detectCollision, createRect(ZERO), createRect(pos), true);
	test(contains, createCircle(ZERO), createCircle(pos), false);
	// test(contains, createCircle(ZERO), createRect(pos), false);
	test(contains, createRect(ZERO), createCircle(pos), false);
	test(contains, createRect(ZERO), createRect(pos), false);
}

for (const pos of contactRects) {
	test(detectCollision, createCircle(ZERO), createCircle(pos), false);
	test(detectCollision, createCircle(ZERO), createRect(pos), false);
	test(detectCollision, createRect(ZERO), createCircle(pos), false);
	test(detectCollision, createRect(ZERO), createRect(pos), true);
	test(contains, createCircle(ZERO), createCircle(pos), false);
	// test(contains, createCircle(ZERO), createRect(pos), false);
	test(contains, createRect(ZERO), createCircle(pos), false);
	test(contains, createRect(ZERO), createRect(pos), false);
}

for (const pos of noContact) {
	test(detectCollision, createCircle(ZERO), createCircle(pos), false);
	test(detectCollision, createCircle(ZERO), createRect(pos), false);
	test(detectCollision, createRect(ZERO), createCircle(pos), false);
	test(detectCollision, createRect(ZERO), createRect(pos), false);
	test(contains, createCircle(ZERO), createCircle(pos), false);
	// test(contains, createCircle(ZERO), createRect(pos), false);
	test(contains, createRect(ZERO), createCircle(pos), false);
	test(contains, createRect(ZERO), createRect(pos), false);
}

function test(
	fn: Function,
	left: Geometry,
	right: Geometry,
	expected: boolean,
) {
	const name = (fn as any).type;
	const lType = `${left.type}${left.position}`;
	const rType = `${right.type}${right.position}`;

	Deno.test(
		`Collisions: ${expected ? '' : 'NO '}${name} ${lType} - ${rType}`,
		() => assertEquals(fn(left, right), expected),
	);
}

function createCircle(position: Vector) {
	return circle(position, 1);
}

function createRect(position: Vector) {
	return rectangle(position, vector(1, 1));
}
