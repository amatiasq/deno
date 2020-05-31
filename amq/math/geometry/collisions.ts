import { getX, getY } from '../vector.ts';
import { Circle, Geometry, Rectangle } from './core.ts';

const collidesX = collidesAxis(getX);
const collidesY = collidesAxis(getY);
const containsX = containsAxis(getX);
const containsY = containsAxis(getY);
const containsValue = containsAxis<number>(x => x);

export const detectCollision = operator('collision', {
	'circle-circle': (left, right) => circleCollision(left, right),
	'circle-rectangle': (left, right) => circleRectangleCollision(left, right),
	'rectangle-circle': (left, right) => circleRectangleCollision(right, left),
	'rectangle-rectangle': (left, right) => rectangleCollision(left, right),
});

export const contains = operator('contains', {
	'circle-circle': (left, right) => circleContains(left, right),
	'circle-rectangle': (left, right) => {
		//circleRectangleContains(left, right),
		throw new Error('NOT IMPLEMENTED');
	},
	'rectangle-circle': (left, right) =>
		rectangleContains(left, right.toRectangle()),
	'rectangle-rectangle': (left, right) => rectangleContains(left, right),
});

function circleCollision(left: Circle, right: Circle) {
	const distance = left.position.diff(right.position).magnitude;
	return left.radius + right.radius >= distance;
}

function circleContains(left: Circle, right: Circle) {
	const distance = left.position.diff(right.position).magnitude;
	return containsValue(left.radius, right.radius, distance);
}

function rectangleCollision(
	{ start: ls, end: le }: Rectangle,
	{ start: rs, end: re }: Rectangle,
) {
	return collidesX(ls, le, rs, re) && collidesY(ls, le, rs, re);
}

function rectangleContains(left: Rectangle, right: Rectangle) {
	const distance = left.position.diff(right.position).abs();
	return (
		containsX(left.size, right.size, distance) &&
		containsY(left.size, right.size, distance)
	);
}

function circleRectangleCollision(left: Circle, right: Rectangle) {
	return (
		circleCollision(left, right.toCircle()) &&
		rectangleCollision(left.toRectangle(), right)
	);
}

function collidesAxis<T>(axis: (v: T) => number) {
	return (ls: T, le: T, rs: T, re: T) =>
		axis(ls) <= axis(re) && axis(rs) <= axis(le);
}

function containsAxis<T>(axis: (v: T) => number) {
	return (left: T, right: T, distance: T) =>
		axis(left) + axis(distance) <= axis(right) ||
		axis(right) + axis(distance) <= axis(left);
}

function operator(name: string, cases: GeometryOperatorCases) {
	const fn = (left: Geometry, right: Geometry) => {
		const key = `${left.type}-${right.type}` as keyof GeometryOperatorCases;
		return cases[key](left as any, right as any);
	};

	fn.type = name;
	return fn;
}

interface GeometryOperatorCases {
	'circle-circle'(left: Circle, right: Circle): boolean;
	'circle-rectangle'(left: Circle, right: Rectangle): boolean;
	'rectangle-circle'(left: Rectangle, right: Circle): boolean;
	'rectangle-rectangle'(left: Rectangle, right: Rectangle): boolean;
}
