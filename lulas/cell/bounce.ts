import { Rectangle } from '../../amq/math/geometry.ts';
import { getX, getY, vector, Vector } from '../../amq/math/vector.ts';
import { Cell } from '../cell.ts';

const x = getCoords(getX);
const y = getCoords(getY);

export function bounce(cell: Cell, screen: Rectangle) {
	const { start: bs, end: be } = cell.body;
	const { start: ss, end: se } = screen;
	const modifier = vector(x(bs, be, ss, se), y(bs, be, ss, se));

	return modifier.is({ x: 1, y: 1 })
		? cell
		: { ...cell, velocity: cell.velocity.apply(modifier) };
}

function getCoords(axis: (value: Vector) => number) {
	return (bs: Vector, be: Vector, ss: Vector, se: Vector) =>
		axis(bs) <= axis(ss) || axis(be) >= axis(se) ? -1 : 1;
}
