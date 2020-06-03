import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { getX, getY, vector, Vector } from "./vector.ts";

Deno.test("Vector: creation", () => {
  const v = vector(1, 2);
  assertVector(v, { x: 1, y: 2 });
});

Deno.test("Vector: getX helper", () => {
  const v = vector(1, 2);
  assertEquals(getX(v), 1);
});

Deno.test("Vector: getY helper", () => {
  const v = vector(1, 2);
  assertEquals(getY(v), 2);
});

Deno.test("Vector: vector.is", () => {
  const v = vector(1, 2);
  assert(v.is({ x: 1, y: 2 }));
});

Deno.test("Vector: merge vectors", () => {
  const a = vector(1, 2);
  const b = vector(3, 4);
  assertVector(a.merge(b), { x: 4, y: 6 });
});

Deno.test("Vector: diff vectors", () => {
  const a = vector(1, 2);
  const b = vector(3, 4);
  assertVector(a.diff(b), { x: -2, y: -2 });
});

Deno.test("Vector: add with number", () => {
  const v = vector(1, 2);
  assertVector(v.add(2), { x: 3, y: 4 });
});

Deno.test("Vector: sub with number", () => {
  const v = vector(1, 2);
  assertVector(v.sub(2), { x: -1, y: 0 });
});

Deno.test("Vector: mul with number", () => {
  const v = vector(1, 2);
  assertVector(v.mul(2), { x: 2, y: 4 });
});

Deno.test("Vector: div by number", () => {
  const v = vector(1, 2);
  assertVector(v.div(2), { x: 0.5, y: 1 });
});

Deno.test("Vector: vector.magnitude", () => {
  const v = vector(3, 4);
  assertEquals(v.magnitude, 5);
});

// Deno.test('Vector: vector.withMagnitude', () => {
//   const v = vector(6, 8);
//   assertVector(v.withMagnitude(5), { x: 3, y: 4 });
// });

Deno.test("Vector: vector.radians SOUTH", () => {
  const v = vector(1, 0);
  assertEquals(v.radians, 0);
});

Deno.test("Vector: vector.radians EAST", () => {
  const v = vector(0, 1);
  assertEquals(v.radians, Math.PI / 2);
});

Deno.test("Vector: vector.radians NORTH", () => {
  const v = vector(-1, 0);
  assertEquals(v.radians, Math.PI);
});

Deno.test("Vector: vector.radians WEST", () => {
  const v = vector(0, -1);
  assertEquals(v.radians, -Math.PI / 2);
});

Deno.test("Vector: vector.degrees SOUTH", () => {
  const v = vector(1, 0);
  assertEquals(v.degrees, 0);
});

Deno.test("Vector: vector.degrees EAST", () => {
  const v = vector(0, 1);
  assertEquals(v.degrees, 90);
});

Deno.test("Vector: vector.degrees NORTH", () => {
  const v = vector(-1, 0);
  assertEquals(v.degrees, 180);
});

Deno.test("Vector: vector.degrees WEST", () => {
  const v = vector(0, -1);
  assertEquals(v.degrees, -90);
});

export function assertVector(
  actual: Vector,
  { x, y }: { x: number; y: number },
) {
  assertEquals(actual.x, x);
  assertEquals(actual.y, y);
}
