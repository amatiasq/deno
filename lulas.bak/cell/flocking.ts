import { Cell, QueryMap } from '../cell.ts';
import { Vector } from '../../amq/math/vector.ts';
import { merge, ZERO } from '../../amq/math/vector.ts';

const VISION_RANGE = 3;

export function flocking(cell: Cell, query: QueryMap) {
	const vision = cell.body.withRadius(cell.body.radius * VISION_RANGE);
	const neighbors = query(vision);

	const velocity = cell.velocity
		.merge(separation(cell, neighbors))
		.merge(alignement(cell, neighbors))
		.merge(cohesion(cell, neighbors))
		.withMagnitude(1);

	return {
		...cell,
		velocity,
	};
}

function separation(cell: Cell, neighbors: Cell[]) {
	const relative = neighbors
		.map(({ body }) => cell.body.position.diff(body.position))
		.reduce(merge, ZERO);

	return cell.velocity.merge(relative.mul(-1)).withMagnitude(1);
}

function alignement(cell: Cell, neighbors: Cell[]) {
	const averageDirection = neighbors
		.reduce<Vector>((sum, x) => sum.merge(x.velocity), ZERO)
		.div(neighbors.length);

	return cell.velocity.merge(averageDirection).withMagnitude(1);
}

function cohesion(cell: Cell, neighbors: Cell[]) {
	const relative = neighbors
		.map(({ body }) => cell.body.position.diff(body.position))
		.reduce(merge, ZERO);

	return cell.velocity.merge(relative.mul(-1)).withMagnitude(1);
}
