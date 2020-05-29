import { Circle, Rectangle } from '../../amq/math/geometry.ts';
import { getX, getY, vector, Vector } from '../../amq/math/vector.ts';

const x = getCoords(getX);
const y = getCoords(getY);

export function keepInside(body: Circle, screen: Rectangle) {
	const { start: bs, end: be } = body;
	const { start: ss, end: se } = screen;
	const misplacement = vector(x(bs, be, ss, se), y(bs, be, ss, se));

	return misplacement.is({ x: 0, y: 0 })
		? body
		: body.withPosition(body.position.merge(misplacement));
}

function getCoords(axis: (value: Vector) => number) {
	return (bs: Vector, be: Vector, ss: Vector, se: Vector) => {
		if (axis(bs) < axis(ss)) {
			return axis(ss) - axis(bs);
		}

		if (axis(be) > axis(se)) {
			return axis(se) - axis(be);
		}

		return 0;
	};
}
