import { Vector } from '../amq/math/vector.ts';
import { Circle } from '../amq/math/geometry.ts';

interface Clonable {
	clone(): this;
}

interface CellStatus {
	velocity: Vector;
	body: Circle;
}

export class Cell implements CellStatus, Clonable {
	velocity: Vector;
	body: Circle;

	constructor(status: CellStatus) {
		this.velocity = status.velocity;
		this.body = status.body;
	}

	clone() {
		return new Cell(this) as this;
	}
}
