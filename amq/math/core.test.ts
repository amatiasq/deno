import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { degreesToRadians, radiansToDegrees } from './core.ts';

Deno.test('Math: degreesToRadians 90', () => {
	assertEquals(degreesToRadians(90), Math.PI / 2);
});

Deno.test('Math: degreesToRadians 180', () => {
	assertEquals(degreesToRadians(180), Math.PI);
});

Deno.test('Math: degreesToRadians 360', () => {
	assertEquals(degreesToRadians(360), Math.PI * 2);
});

Deno.test('Math: radiansToDegrees PI / 2', () => {
	assertEquals(radiansToDegrees(Math.PI / 2), 90);
});

Deno.test('Math: radiansToDegrees PI', () => {
	assertEquals(radiansToDegrees(Math.PI), 180);
});

Deno.test('Math: radiansToDegrees TAU', () => {
	assertEquals(radiansToDegrees(Math.PI * 2), 360);
});
