import { degreesToRadians, TAU } from "../amq/math.ts";
import { Circle, Rectangle } from "../amq/math/geometry.ts";
import { isBranch, QuadTree } from "../amq/math/geometry/quadtree.ts";
import { Vector } from "../amq/math/vector.ts";
import { Cell } from "./cell.ts";
import { mousePosition } from "./interaction.ts";

const BACKGROUND_COLOR = "#0A0A0A";
const CELL_COLOR = "#5E5D6F";
const CELL_COLLISION_COLOR = "#F45B69";
const CELL_INTERACTING_COLOR = "#F6E8EA";
const QUAD_COLOR = "#282244";

export class Renderer {
  private readonly context: CanvasRenderingContext2D;
  private leaf = 1;

  constructor(private readonly canvas: any) {
    this.context = canvas.getContext("2d");
  }

  clear() {
    this.context.fillStyle = BACKGROUND_COLOR;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.closePath();

    this.leaf = 1;
  }

  renderCell({ velocity, body, isColliding }: Cell) {
    const { position, radius } = body;

    this.context.save();
    this.move(position);
    this.rotate(-45);
    this.rotate(velocity.degrees);

    this.context.beginPath();
    this.context.moveTo(radius, 0);
    this.context.lineTo(radius, radius);
    this.context.lineTo(0, radius);
    this.context.arc(0, 0, radius, TAU / 4, TAU);
    this.context.closePath();

    const isInteracting = body.contains(mousePosition());

    this.context.fillStyle = isInteracting
      ? CELL_INTERACTING_COLOR
      : isColliding
      ? CELL_COLLISION_COLOR
      : CELL_COLOR;

    // this.context.strokeStyle = isInteracting
    // 	? 'transparent'
    // 	: isColliding
    // 	? 'yellow'
    // 	: '#E9B111';

    this.context.lineWidth = 1;
    this.context.fill();
    this.context.stroke();

    this.context.restore();
  }

  renderQuad(tree: QuadTree<Cell>) {
    if (isBranch(tree)) {
      tree.children.forEach((x) => this.renderQuad(x));
      return;
    }

    const { area } = tree;
    this.context.save();
    this.move(area.position);

    this.context.beginPath();
    this.drawRectangle(area);
    this.context.closePath();

    this.context.fillStyle = "red";
    this.context.strokeStyle = QUAD_COLOR;
    this.context.lineWidth = 1;
    this.context.stroke();

    this.context.restore();
  }

  renderQuadInteractive(tree: QuadTree<Cell>) {
    if (isBranch(tree)) {
      tree.children.forEach((x) => this.renderQuadInteractive(x));
      return;
    }

    const { area } = tree;

    this.context.save();
    this.move(area.position);
    this.context.fillStyle = "red";
    this.text(`${this.leaf}`);
    this.leaf++;

    if (area.contains(mousePosition())) {
      this.context.beginPath();
      this.drawRectangle(area);
      this.context.closePath();

      this.context.fillStyle = QUAD_COLOR;
      this.context.fill();
    }

    this.context.restore();
  }

  private move(position: Vector) {
    this.context.translate(position.x, position.y);
  }

  private rotate(degrees: number) {
    this.context.rotate(degreesToRadians(degrees));
  }

  private drawCircle({ radius }: Circle) {
    this.context.arc(0, 0, radius, 0, TAU);
  }

  private drawRectangle({ size }: Rectangle) {
    this.context.rect(-size.x, -size.y, size.x * 2, size.y * 2);
  }

  private text(text: string) {
    this.context.font = "30px Arial";
    this.context.fillText(text, 0, 0);
  }

  // private drawGeometry(geo: Geometry) {
  //   geo.type === 'circle'
  //     ? this.drawCircle(geo as Circle)
  //     : this.drawRectangle(geo as Rectangle);
  // }
}
