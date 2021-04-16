import { Vector, ZERO } from '../amq/math/vector.ts';
import { Circle, circle } from '../amq/math/geometry.ts';

interface Clonable {
	clone(): this;
}

interface Serializable {
	toJSON(): {};
}

type Editable<T> = {
	-readonly [P in keyof T]: T[P];
};

type BufferOperation<T> = (target: Editable<T>) => void;

class EditionBuffer<T> {
	private readonly operations: Array<BufferOperation<T>> = [];

	constructor(private readonly target: T) {}

	push(operation: BufferOperation<T>) {
		this.operations.push(operation);
	}

	flush() {
		for (let i = 0, len = this.operations.length; i < len; i++) {
			this.operations[i](this.target);
		}

		this.operations.length = 0;
	}
}

export class Cell implements Clonable, Serializable {
	readonly buffer = new EditionBuffer(this);

	constructor(readonly velocity: Vector, readonly body: Circle) {}

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

const a = new Cell(ZERO, circle(ZERO, 10));
a.buffer.push(x => (x.velocity = x.velocity.abs()));
