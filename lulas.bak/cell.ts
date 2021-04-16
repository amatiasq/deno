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

	constructor(velocity: Vector, body: Circle) {
		this.state = new Buffer<Cell>({
			velocity,
			body,
		});
	}

	toTransient() {
		return Object.assign({}, this);
	}

	die() {
		this.changes.isAlive = false;
	}
}

interface Clonable {
	clone(): this;
}

class BufferEntity<T extends Clonable> {
	private buffer = this.state.clone();

	constructor(private state: T) {}

	private buffer: T;
	private state: T;
}

/*

import { random } from '../amq/math.ts';
import { circle, Circle, Geometry, Rectangle } from '../amq/math/geometry.ts';
import { QuadEntity } from '../amq/math/geometry/quadtree.ts';
import { vector, Vector } from '../amq/math/vector.ts';
import { bounce } from './cell/bounce.ts';
import { keepInside } from './cell/keepInside.ts';
import { flocking } from './cell/flocking.ts';

export type QueryMap = (area: Geometry) => Cell[];

export interface Cell extends QuadEntity {
	velocity: Vector;
	body: Circle;
	isColliding: boolean;
}

export function createCells(amount: number, screen: Rectangle) {
	return Array(amount).fill(null).map(randCell(screen));
}

export function tickCell(cell: Cell, query: QueryMap, screen: Rectangle) {
	const getCellsAt = (area: Geometry) => query(area).filter(x => x !== cell);
	const flocked = flocking(cell, getCellsAt);
	const final = move(flocked, screen);
	const colliding = getCellsAt(final.body);

	return {
		...final,
		isColliding: Boolean(colliding.length),
	};
}

function move(cell: Cell, screen: Rectangle) {
	const velocity = bounce(cell, screen);
	const body = cell.body.withPosition(cell.body.position.merge(velocity));

	return {
		...cell,
		velocity,
		body: keepInside(body, screen),
	};
}

function randCell({ start, end }: Rectangle) {
	return () =>
		cell(
			vector(random(end.x, start.x), random(end.y, start.y)),
			random(15, 5),
		);
}

function cell(position: Vector, size: number): Cell {
	return {
		body: circle(position, size),
		velocity: vector(random(1, -1), random(1, -1)),
		isColliding: false,
	};
}
*/
