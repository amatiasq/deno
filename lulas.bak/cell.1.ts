import { Vector } from '../amq/math/vector.ts';
import { Circle } from '../amq/math/geometry.ts';

export interface Cell {
	velocity: Vector;
	body: Circle;
}

class Buffer<T extends {}> {
	private buffer: T;

	constructor(private target: T) {
		this.buffer = Object.assign({}, target);
	}

	get<TKey extends keyof T>(prop: TKey): T[TKey] {
		return this.target[prop];
	}

	set<TKey extends keyof T>(prop: TKey, value: T[TKey]): void {
		this.buffer[prop] = value;
	}

	flush() {
		const { target, buffer } = this;
		this.target = buffer;
		this.buffer = Object.assign(target, buffer);
	}
}

export class CellImpl implements Cell {
	private readonly state: Buffer<Cell>;

	get body() {
		return this.state.get('body');
	}
	set body(value: Circle) {
		this.state.set('body', value);
	}

	get velocity() {
		return this.state.get('velocity');
	}
	set velocity(value: Vector) {
		this.state.set('velocity', value);
	}

	constructor(velocity: Vector, body: Circle) {
		this.state = new Buffer<Cell>({
			velocity,
			body,
		});
	}
}
