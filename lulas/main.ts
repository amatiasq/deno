import { loop } from "../amq/game.ts";
import { getScreen, fullscreen } from "../amq/dom/canvas.ts";
import { createCells, Cell, tickCell } from "./cell.ts";
import {
  quadtree,
  queryQuad,
  QuadTree,
} from "../amq/math/geometry/quadtree.ts";
import { Geometry } from "../amq/math/geometry.ts";
import { Renderer } from "./render.ts";

const QUAD_LIMIT = 3;
const CELLS = 100;

const screen = getScreen();
const universe = createCells(CELLS, screen);
const canvas = document.querySelector("canvas");
const renderer = new Renderer(canvas);

const pause = loop<Universe>(tick, render, { cells: universe });

fullscreen(canvas!);
window.addEventListener("click", pause);

function tick({ cells: universe }: Universe) {
  const screen = getScreen();
  const quad = quadtree(QUAD_LIMIT, screen, universe);
  const query = (x: Geometry) => queryQuad(quad, x);
  const cells = universe.map((x) => tickCell(x, query, screen));
  return { cells, quad };
}

function render({ cells, quad }: Universe) {
  renderer.clear();
  renderer.renderQuad(quad!);
  // renderer.renderQuadInteractive(quad!);
  cells.forEach((x) => renderer.renderCell(x));
}

interface Universe {
  cells: Cell[];
  quad?: QuadTree<Cell>;
}
