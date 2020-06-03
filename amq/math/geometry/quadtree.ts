import { vector } from '../vector.ts';
import { detectCollision } from './collisions.ts';
import { Geometry, Rectangle, rectangle } from './core.ts';

export interface QuadEntity {
	body: Geometry;
}

interface Quad {
	readonly isLeaf: boolean;
	readonly area: Rectangle;
}

interface QuadBranch<T extends QuadEntity> extends Quad {
	readonly isLeaf: false;
	readonly children: Array<QuadTree<T>>;
}

interface QuadLeaf<T extends QuadEntity> extends Quad {
	readonly isLeaf: true;
	readonly items: T[];
}

export type QuadTree<T extends QuadEntity = any> = QuadBranch<T> | QuadLeaf<T>;

let maxRecursion = 10;

export function isLeaf<T extends QuadEntity>(
	node: QuadTree<T>,
): node is QuadLeaf<T> {
	return node.isLeaf;
}

export function isBranch<T extends QuadEntity>(
	node: QuadTree<T>,
): node is QuadBranch<T> {
	return !node.isLeaf;
}

export function setMaxDepth(value: number) {
	maxRecursion = value;
}

export function queryQuad<T extends QuadEntity>(
	node: QuadTree<T>,
	area: Geometry,
): T[] {
	if (!detectCollision(node.area, area)) {
		return [];
	}

	return isLeaf(node)
		? node.items.filter(x => detectCollision(x.body, area))
		: ([] as T[]).concat(...node.children.map(x => queryQuad(x, area)));
}

export function depth<T extends QuadEntity>(
	node: QuadTree<T>,
	accumulated = 0,
): number {
	const next = accumulated + 1;
	return node.isLeaf
		? next
		: Math.max(
				...(node as QuadBranch<T>).children.map(x => depth(x, next)),
		  );
}

let a = 0;

export function quadtree<T extends QuadEntity>(
	limit: number,
	area: Rectangle,
	items: T[],
): QuadTree<T> {
	a = 1;
	return quadnode(limit, area, items, 0);
}

function quadnode<T extends QuadEntity>(
	limit: number,
	area: Rectangle,
	items: T[],
	recursion: number,
): QuadTree<T> {
	if (items.length <= limit || recursion > maxRecursion) {
		a++;
		return { isLeaf: true, area, items } as QuadLeaf<T>;
	}

	const children = split(area).map(childArea => {
		const childItems = items.filter(x =>
			detectCollision(childArea, x.body),
		);
		return quadnode(limit, childArea, childItems, recursion + 1);
	});

	return { isLeaf: false, area, children } as QuadBranch<T>;
}

function split({ position: pos, size }: Rectangle) {
	const half = size.div(2);
	const positions = [
		pos.diff(half),
		vector(pos.x + half.x, pos.y - half.y),
		vector(pos.x - half.x, pos.y + half.y),
		pos.merge(half),
	];

	return positions.map(x => rectangle(x, half)) as [
		Rectangle,
		Rectangle,
		Rectangle,
		Rectangle,
	];
}
