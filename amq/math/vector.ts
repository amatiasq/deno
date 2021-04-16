import { radiansToDegrees, TAU } from './core.ts';
import { withAccessor, WithSetter } from '../code/withAccessor.ts';

export interface Vectorish {
	x: number;
	y: number;
}

export interface Vector {
	readonly x: number;
	readonly y: number;
	readonly radians: number;
	readonly degrees: number;
	readonly magnitude: number;

	withMagnitude: WithSetter<Vector, number>;

	is(other: Vectorish): boolean;
	abs(): Vector;

	merge(other: Vector): Vector;
	diff(other: Vector): Vector;
	apply(other: Vector): Vector;

	add(val: number): Vector;
	sub(val: number): Vector;
	mul(val: number): Vector;
	div(val: number): Vector;

	toJSON(): Vectorish;
	toString(): string;
}

const $with = withAccessor<Vector>();

class VectorImpl implements Vector {
	constructor(readonly x: number, readonly y: number) {}

	get radians() {
		return Math.atan2(this.y, this.x) % TAU;
	}

	get degrees() {
		return radiansToDegrees(this.radians);
	}

	get magnitude() {
		return Math.hypot(this.x, this.y);
	}

	withMagnitude = $with('magnitude', (magnitude, { x, y }) => {
		const ratio = this.magnitude / magnitude;
		return vector(this.x / ratio, this.y / ratio);
	});

	is({ x, y }: Vectorish) {
		return this.x === x && this.y === y;
	}

	abs = operateVector(Math.abs);

	merge = operateVectors((l, r) => l + r);
	diff = operateVectors((l, r) => l - r);
	apply = operateVectors((l, r) => l * r); // untested

	add = operateVectorWithNumber((l, r) => l + r);
	sub = operateVectorWithNumber((l, r) => l - r);
	mul = operateVectorWithNumber((l, r) => l * r);
	div = operateVectorWithNumber((l, r) => l / r);

	toJSON() {
		return { x: this.x, y: this.y };
	}

	toString() {
		return `(${this.x}, ${this.y})`;
	}
}

export const vector = (x: number, y: number): Vector => new VectorImpl(x, y);
export const getX = (vector: Vector) => vector.x;
export const getY = (vector: Vector) => vector.y;

export const merge = operateVectorsStatic((l, r) => l + r); // untested
export const diff = operateVectorsStatic((l, r) => l - r); // untested

export const ZERO = vector(0, 0);
// export const UNIT = vector(1, 1).withMagnitude(1);

function operateVector(operate: (v: number) => number) {
	return function (this: Vector) {
		return vector(operate(this.x), operate(this.y));
	};
}

function operateVectors(operate: (l: number, r: number) => number) {
	return function (this: Vector, other: Vector) {
		return vector(operate(this.x, other.x), operate(this.y, other.y));
	};
}

function operateVectorsStatic(operate: (l: number, r: number) => number) {
	return function (left: Vector, right: Vector) {
		return vector(operate(left.x, right.x), operate(left.y, right.y));
	};
}

function operateVectorWithNumber(operate: (l: number, r: number) => number) {
	return function (this: Vector, right: number) {
		return vector(operate(this.x, right), operate(this.y, right));
	};
}
