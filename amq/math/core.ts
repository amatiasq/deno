export const PI = Math.PI;
export const TAU = PI * 2;

export const abs = Math.abs;
export const sqrt = Math.sqrt;

export const DEGREES_PER_TURN = 360;
export const RADIANS_PER_TURN = TAU;

export function degreesToRadians(deg: number) {
  return (deg * RADIANS_PER_TURN) / DEGREES_PER_TURN;
}

export function radiansToDegrees(rad: number) {
  return (rad * DEGREES_PER_TURN) / RADIANS_PER_TURN;
}

export function random(max = 1, min = 0) {
  return Math.round(Math.random() * (max - min)) + min;
}
