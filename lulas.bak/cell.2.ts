import { Vector } from '../amq/math/vector.ts';
import { Circle } from '../amq/math/geometry.ts';

interface Clonable {
	clone(): this;
}

interface Serializable {
	toJSON(): {};
}

export class Cell implements Clonable, Serializable {
	constructor(public velocity: Vector, public body: Circle) {}

	clone() {
		return new Cell(this.velocity, this.body) as this;
	}

	toJSON() {
		return {
			velocity: this.velocity.toJSON(),
			body: this.body.toJSON(),
		};
	}
}
