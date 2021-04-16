import { Vector, vector } from '../vector.ts';

export interface Geometry {
	readonly type: 'circle' | 'rectangle';
	readonly position: Vector;
	readonly start: Vector;
	readonly end: Vector;
	withPosition(position: Vector): Geometry;
	contains(point: Vector): boolean;
	toCircle(): Circle;
	toRectangle(): Rectangle;
}

export interface Circle extends Geometry {
	readonly radius: number;
	withRadius(radius: number): Circle;
	withPosition(position: Vector): Circle;
	toJSON(): {
		type: 'circle';
		position: ReturnType<Vector['toJSON']>;
		radius: number;
	};
}

export interface Rectangle extends Geometry {
	readonly size: Vector;
	withSize(size: Vector): Rectangle;
	withPosition(position: Vector): Rectangle;
	toJSON(): {
		type: 'rectangle';
		position: ReturnType<Vector['toJSON']>;
		size: ReturnType<Vector['toJSON']>;
	};
}

class CircleImpl implements Circle {
	type = 'circle' as const;

	constructor(readonly position: Vector, readonly radius: number) {}

	get start(): Vector {
		return this.position.sub(this.radius);
	}
	get end(): Vector {
		return this.position.add(this.radius);
	}

	withPosition(position: Vector) {
		return circle(position, this.radius);
	}

	withRadius(radius: number) {
		return circle(this.position, radius);
	}

	contains(point: Vector) {
		return this.position.diff(point).magnitude <= this.radius;
	}

	toCircle() {
		return this;
	}

	toRectangle() {
		return rectangle(this.position, vector(this.radius, this.radius));
	}

	toJSON() {
		return {
			type: this.type,
			position: this.position.toJSON(),
			radius: this.radius,
		};
	}

	toString() {
		return `circle${this.radius}->${this.position}`;
	}
}

class RectangleImpl implements Rectangle {
	type = 'rectangle' as const;

	constructor(readonly position: Vector, readonly size: Vector) {}

	get start(): Vector {
		return this.position.diff(this.size);
	}
	get end(): Vector {
		return this.position.merge(this.size);
	}

	withPosition(position: Vector) {
		return rectangle(position, this.size);
	}

	withSize(size: Vector) {
		return rectangle(this.position, size);
	}

	contains({ x, y }: Vector) {
		const {
			start: { x: sx, y: sy },
			end: { x: ex, y: ey },
		} = this;
		return sx <= x && x <= ex && sy <= y && y <= ey;
	}

	toCircle() {
		return circle(this.position, this.size.magnitude);
	}

	toRectangle() {
		return this;
	}

	toJSON() {
		return {
			type: this.type,
			position: this.position.toJSON(),
			size: this.size.toJSON(),
		};
	}

	toString() {
		return `rect${this.size}->${this.position}`;
	}
}

export function circle(position: Vector, radius: number): Circle {
	return new CircleImpl(position, radius) as Circle;
}

export function rectangle(position: Vector, size: Vector): Rectangle {
	return new RectangleImpl(position, size) as Rectangle;
}

// function operateCircle(operator: (l: number, r: number) => number) {
//   return function (this: Circle, value: number) {
//     return { ...this, radius: operator(this.radius, value) };
//   };
// }
