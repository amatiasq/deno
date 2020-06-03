import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { circle, rectangle } from "../geometry.ts";
import { vector as v, Vector, ZERO } from "../vector.ts";
import { depth, quadtree, queryQuad } from "./quadtree.ts";

const rect = () => rectangle(ZERO, v(10, 10));

Deno.test("Quadtree: create", () => {
  const sut = quadtree(1, rect(), []);
  assertEquals(sut.isLeaf, true);
});

Deno.test("Quadtree: new quadtree has depth 1", () => {
  const sut = quadtree(1, rect(), []);
  assertEquals(depth(sut), 1);
});

Deno.test("Quadtree: protection against call recursion", () => {
  quadtree(1, rect(), [createEntity(ZERO), createEntity(ZERO)]);
});

Deno.test("Quadtree: query", () => {
  const first = createEntity(v(-3, -3));
  const second = createEntity(v(3, 3));
  const tree = quadtree(1, rect(), [first, second]);
  const areaFirst = rectangle(v(-5, -5), v(4, 4));
  const areaSecond = rectangle(v(5, 5), v(4, 4));

  assertEquals(queryQuad(tree, areaFirst), [first]);
  assertEquals(queryQuad(tree, areaSecond), [second]);
});

function createEntity(position: Vector) {
  return { body: circle(position, 1) };
}
