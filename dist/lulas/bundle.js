// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

// @ts-nocheck
/* eslint-disable */
let System, __instantiateAsync, __instantiate;

(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };

  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }

  __instantiateAsync = async (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExpA(m);
  };

  __instantiate = (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExp(m);
  };
})();

/// <reference lib="dom" />
System.register("amq/game", [], function (exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function loop(tick, render, initial) {
    let isRunning = true;
    start(initial);
    return () => (isRunning ? pause() : unpause());
    function start(uni) {
      const nextState = isRunning ? tick(uni) : uni;
      render(nextState);
      requestAnimationFrame(() => start(nextState));
    }
    function pause() {
      isRunning = false;
    }
    function unpause() {
      isRunning = true;
    }
  }
  exports_1("loop", loop);
  return {
    setters: [],
    execute: function () {
    },
  };
});
System.register("amq/math/core", [], function (exports_2, context_2) {
  "use strict";
  var PI, TAU, abs, sqrt, DEGREES_PER_TURN, RADIANS_PER_TURN;
  var __moduleName = context_2 && context_2.id;
  function degreesToRadians(deg) {
    return (deg * RADIANS_PER_TURN) / DEGREES_PER_TURN;
  }
  exports_2("degreesToRadians", degreesToRadians);
  function radiansToDegrees(rad) {
    return (rad * DEGREES_PER_TURN) / RADIANS_PER_TURN;
  }
  exports_2("radiansToDegrees", radiansToDegrees);
  function random(max = 1, min = 0) {
    return Math.round(Math.random() * (max - min)) + min;
  }
  exports_2("random", random);
  return {
    setters: [],
    execute: function () {
      exports_2("PI", PI = Math.PI);
      exports_2("TAU", TAU = PI * 2);
      exports_2("abs", abs = Math.abs);
      exports_2("sqrt", sqrt = Math.sqrt);
      exports_2("DEGREES_PER_TURN", DEGREES_PER_TURN = 360);
      exports_2("RADIANS_PER_TURN", RADIANS_PER_TURN = TAU);
    },
  };
});
System.register(
  "amq/math/vector",
  ["amq/math/core"],
  function (exports_3, context_3) {
    "use strict";
    var core_ts_1, VectorImpl, vector, getX, getY, ZERO;
    var __moduleName = context_3 && context_3.id;
    // export const UNIT = vector(1, 1).withMagnitude(1);
    function operateVector(operate) {
      return function () {
        return vector(operate(this.x), operate(this.y));
      };
    }
    function operateVectors(operate) {
      return function (other) {
        return vector(operate(this.x, other.x), operate(this.y, other.y));
      };
    }
    function operateVectorWithNumber(operate) {
      return function (right) {
        return vector(operate(this.x, right), operate(this.y, right));
      };
    }
    return {
      setters: [
        function (core_ts_1_1) {
          core_ts_1 = core_ts_1_1;
        },
      ],
      execute: function () {
        VectorImpl = class VectorImpl {
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.abs = operateVector(Math.abs);
            this.merge = operateVectors((l, r) => l + r);
            this.diff = operateVectors((l, r) => l - r);
            this.apply = operateVectors((l, r) => l * r); // untested
            this.add = operateVectorWithNumber((l, r) => l + r);
            this.sub = operateVectorWithNumber((l, r) => l - r);
            this.mul = operateVectorWithNumber((l, r) => l * r);
            this.div = operateVectorWithNumber((l, r) => l / r);
          }
          get radians() {
            return Math.atan2(this.y, this.x) % core_ts_1.TAU;
          }
          get degrees() {
            return core_ts_1.radiansToDegrees(this.radians);
          }
          get magnitude() {
            return Math.hypot(this.x, this.y);
          }
          // withMagnitude(magnitude: number) {
          //   const ratio = this.magnitude / magnitude;
          //   return vector(this.x / ratio, this.y / ratio);
          // }
          is({ x, y }) {
            return this.x === x && this.y === y;
          }
          toJSON() {
            return { x: this.x, y: this.y };
          }
          toString() {
            return `(${this.x}, ${this.y})`;
          }
        };
        exports_3("vector", vector = (x, y) => new VectorImpl(x, y));
        exports_3("getX", getX = (vector) => vector.x);
        exports_3("getY", getY = (vector) => vector.y);
        exports_3("ZERO", ZERO = vector(0, 0));
      },
    };
  },
);
System.register(
  "amq/math/geometry",
  ["amq/math/vector"],
  function (exports_4, context_4) {
    "use strict";
    var vector_ts_1, CircleImpl, RectangleImpl;
    var __moduleName = context_4 && context_4.id;
    function circle(position, radius) {
      return new CircleImpl(position, radius);
    }
    exports_4("circle", circle);
    function rectangle(position, size) {
      return new RectangleImpl(position, size);
    }
    exports_4("rectangle", rectangle);
    return {
      setters: [
        function (vector_ts_1_1) {
          vector_ts_1 = vector_ts_1_1;
        },
      ],
      execute: function () {
        CircleImpl = class CircleImpl {
          constructor(position, radius) {
            this.position = position;
            this.radius = radius;
            this.type = "circle";
          }
          get start() {
            return this.position.sub(this.radius);
          }
          get end() {
            return this.position.add(this.radius);
          }
          withPosition(position) {
            return circle(position, this.radius);
          }
          withRadius(radius) {
            return circle(this.position, radius);
          }
          contains(point) {
            return this.position.diff(point).magnitude <= this.radius;
          }
          toCircle() {
            return this;
          }
          toRectangle() {
            return rectangle(
              this.position,
              vector_ts_1.vector(this.radius, this.radius),
            );
          }
          toString() {
            return `circle${this.radius}->${this.position}`;
          }
        };
        RectangleImpl = class RectangleImpl {
          constructor(position, size) {
            this.position = position;
            this.size = size;
            this.type = "rectangle";
          }
          get start() {
            return this.position.diff(this.size);
          }
          get end() {
            return this.position.merge(this.size);
          }
          withPosition(position) {
            return rectangle(position, this.size);
          }
          withSize(size) {
            return rectangle(this.position, size);
          }
          contains({ x, y }) {
            const { start: { x: sx, y: sy }, end: { x: ex, y: ey } } = this;
            return sx <= x && x <= ex && sy <= y && y <= ey;
          }
          toCircle() {
            return circle(this.position, this.size.magnitude);
          }
          toRectangle() {
            return this;
          }
          toString() {
            return `rect${this.size}->${this.position}`;
          }
        };
      },
    };
  },
);
/// <reference lib="dom" />
System.register(
  "amq/dom/canvas",
  ["amq/math/geometry", "amq/math/vector"],
  function (exports_5, context_5) {
    "use strict";
    var geometry_ts_1, vector_ts_2;
    var __moduleName = context_5 && context_5.id;
    function fullscreen(canvas) {
      window.addEventListener("resize", resize);
      resize();
      function resize() {
        const screen = getScreenSize();
        canvas.width = screen.x;
        canvas.height = screen.y;
      }
    }
    exports_5("fullscreen", fullscreen);
    function getScreen() {
      const halfSie = getScreenSize().div(2);
      return geometry_ts_1.rectangle(halfSie, halfSie);
    }
    exports_5("getScreen", getScreen);
    function getScreenSize() {
      return vector_ts_2.vector(window.innerWidth, window.innerHeight);
    }
    return {
      setters: [
        function (geometry_ts_1_1) {
          geometry_ts_1 = geometry_ts_1_1;
        },
        function (vector_ts_2_1) {
          vector_ts_2 = vector_ts_2_1;
        },
      ],
      execute: function () {
      },
    };
  },
);
System.register(
  "amq/math",
  ["amq/math/core", "amq/math/vector"],
  function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_1(m) {
      var exports = {};
      for (var n in m) {
        if (n !== "default") exports[n] = m[n];
      }
      exports_6(exports);
    }
    return {
      setters: [
        function (core_ts_2_1) {
          exportStar_1(core_ts_2_1);
        },
        function (vector_ts_3_1) {
          exportStar_1(vector_ts_3_1);
        },
      ],
      execute: function () {
      },
    };
  },
);
System.register(
  "amq/math/geometry/collisions",
  ["amq/math/vector"],
  function (exports_7, context_7) {
    "use strict";
    var vector_ts_4,
      vector_ts_5,
      collidesX,
      collidesY,
      containsX,
      containsY,
      containsValue,
      detectCollision,
      contains;
    var __moduleName = context_7 && context_7.id;
    function circleCollision(left, right) {
      const distance = left.position.diff(right.position).magnitude;
      return left.radius + right.radius >= distance;
    }
    function circleContains(left, right) {
      const distance = left.position.diff(right.position).magnitude;
      return containsValue(left.radius, right.radius, distance);
    }
    function rectangleCollision(
      { start: ls, end: le },
      { start: rs, end: re },
    ) {
      return collidesX(ls, le, rs, re) && collidesY(ls, le, rs, re);
    }
    function rectangleContains(left, right) {
      const distance = left.position.diff(right.position).abs();
      return (containsX(left.size, right.size, distance) &&
        containsY(left.size, right.size, distance));
    }
    function circleRectangleCollision(left, right) {
      return (circleCollision(left, right.toCircle()) &&
        rectangleCollision(left.toRectangle(), right));
    }
    function collidesAxis(axis) {
      return (ls, le, rs, re) => axis(ls) <= axis(re) && axis(rs) <= axis(le);
    }
    function containsAxis(axis) {
      return (left, right, distance) =>
        axis(left) + axis(distance) <= axis(right) ||
        axis(right) + axis(distance) <= axis(left);
    }
    function operator(name, cases) {
      const fn = (left, right) => {
        const key = `${left.type}-${right.type}`;
        return cases[key](left, right);
      };
      fn.type = name;
      return fn;
    }
    return {
      setters: [
        function (vector_ts_4_1) {
          vector_ts_4 = vector_ts_4_1;
          vector_ts_5 = vector_ts_4_1;
        },
      ],
      execute: function () {
        collidesX = collidesAxis(vector_ts_4.getX);
        collidesY = collidesAxis(vector_ts_5.getY);
        containsX = containsAxis(vector_ts_4.getX);
        containsY = containsAxis(vector_ts_5.getY);
        containsValue = containsAxis((x) => x);
        exports_7(
          "detectCollision",
          detectCollision = operator("collision", {
            "circle-circle": (left, right) => circleCollision(left, right),
            "circle-rectangle": (left, right) =>
              circleRectangleCollision(left, right),
            "rectangle-circle": (left, right) =>
              circleRectangleCollision(right, left),
            "rectangle-rectangle": (left, right) =>
              rectangleCollision(left, right),
          }),
        );
        exports_7(
          "contains",
          contains = operator("contains", {
            "circle-circle": (left, right) => circleContains(left, right),
            "circle-rectangle": (left, right) => {
              //circleRectangleContains(left, right),
              throw new Error("NOT IMPLEMENTED");
            },
            "rectangle-circle": (left, right) =>
              rectangleContains(left, right.toRectangle()),
            "rectangle-rectangle": (left, right) =>
              rectangleContains(left, right),
          }),
        );
      },
    };
  },
);
System.register(
  "amq/math/geometry/quadtree",
  ["amq/math/geometry", "amq/math/vector", "amq/math/geometry/collisions"],
  function (exports_8, context_8) {
    "use strict";
    var geometry_ts_2, vector_ts_6, collisions_ts_1, maxRecursion, a;
    var __moduleName = context_8 && context_8.id;
    function isLeaf(node) {
      return node.isLeaf;
    }
    exports_8("isLeaf", isLeaf);
    function isBranch(node) {
      return !node.isLeaf;
    }
    exports_8("isBranch", isBranch);
    function setMaxDepth(value) {
      maxRecursion = value;
    }
    exports_8("setMaxDepth", setMaxDepth);
    function queryQuad(node, area) {
      if (!collisions_ts_1.detectCollision(node.area, area)) {
        return [];
      }
      return isLeaf(node)
        ? node.items.filter((x) =>
          collisions_ts_1.detectCollision(x.body, area)
        )
        : [].concat(...node.children.map((x) => queryQuad(x, area)));
    }
    exports_8("queryQuad", queryQuad);
    function depth(node, accumulated = 0) {
      const next = accumulated + 1;
      return node.isLeaf
        ? next
        : Math.max(...node.children.map((x) => depth(x, next)));
    }
    exports_8("depth", depth);
    function quadtree(limit, area, items) {
      a = 1;
      return quadnode(limit, area, items, 0);
    }
    exports_8("quadtree", quadtree);
    function quadnode(limit, area, items, recursion) {
      if (items.length <= limit || recursion > maxRecursion) {
        a++;
        return { isLeaf: true, area, items };
      }
      const children = split(area).map((childArea) => {
        const childItems = items.filter((x) =>
          collisions_ts_1.detectCollision(childArea, x.body)
        );
        return quadnode(limit, childArea, childItems, recursion + 1);
      });
      return { isLeaf: false, area, children };
    }
    function split({ position: pos, size }) {
      const half = size.div(2);
      const positions = [
        pos.diff(half),
        vector_ts_6.vector(pos.x + half.x, pos.y - half.y),
        vector_ts_6.vector(pos.x - half.x, pos.y + half.y),
        pos.merge(half),
      ];
      return positions.map((x) => geometry_ts_2.rectangle(x, half));
    }
    return {
      setters: [
        function (geometry_ts_2_1) {
          geometry_ts_2 = geometry_ts_2_1;
        },
        function (vector_ts_6_1) {
          vector_ts_6 = vector_ts_6_1;
        },
        function (collisions_ts_1_1) {
          collisions_ts_1 = collisions_ts_1_1;
        },
      ],
      execute: function () {
        maxRecursion = 10;
        a = 0;
      },
    };
  },
);
System.register(
  "lulas/cell/bounce",
  ["amq/math/vector"],
  function (exports_9, context_9) {
    "use strict";
    var vector_ts_7, x, y;
    var __moduleName = context_9 && context_9.id;
    function bounce(cell, screen) {
      const { start: bs, end: be } = cell.body;
      const { start: ss, end: se } = screen;
      const modifier = vector_ts_7.vector(x(bs, be, ss, se), y(bs, be, ss, se));
      return modifier.is({ x: 1, y: 1 }) ? cell
      : { ...cell, velocity: cell.velocity.apply(modifier) };
    }
    exports_9("bounce", bounce);
    function getCoords(axis) {
      return (bs, be, ss, se) =>
        axis(bs) <= axis(ss) || axis(be) >= axis(se) ? -1 : 1;
    }
    return {
      setters: [
        function (vector_ts_7_1) {
          vector_ts_7 = vector_ts_7_1;
        },
      ],
      execute: function () {
        x = getCoords(vector_ts_7.getX);
        y = getCoords(vector_ts_7.getY);
      },
    };
  },
);
System.register(
  "lulas/cell/keepInside",
  ["amq/math/vector"],
  function (exports_10, context_10) {
    "use strict";
    var vector_ts_8, x, y;
    var __moduleName = context_10 && context_10.id;
    function keepInside(body, screen) {
      const { start: bs, end: be } = body;
      const { start: ss, end: se } = screen;
      const misplacement = vector_ts_8.vector(
        x(bs, be, ss, se),
        y(bs, be, ss, se),
      );
      return misplacement.is({ x: 0, y: 0 }) ? body
      : body.withPosition(body.position.merge(misplacement));
    }
    exports_10("keepInside", keepInside);
    function getCoords(axis) {
      return (bs, be, ss, se) => {
        if (axis(bs) < axis(ss)) {
          return axis(ss) - axis(bs);
        }
        if (axis(be) > axis(se)) {
          return axis(se) - axis(be);
        }
        return 0;
      };
    }
    return {
      setters: [
        function (vector_ts_8_1) {
          vector_ts_8 = vector_ts_8_1;
        },
      ],
      execute: function () {
        x = getCoords(vector_ts_8.getX);
        y = getCoords(vector_ts_8.getY);
      },
    };
  },
);
System.register(
  "lulas/cell",
  [
    "amq/math",
    "amq/math/geometry",
    "amq/math/vector",
    "lulas/cell/bounce",
    "lulas/cell/keepInside",
  ],
  function (exports_11, context_11) {
    "use strict";
    var math_ts_1, geometry_ts_3, vector_ts_9, bounce_ts_1, keepInside_ts_1;
    var __moduleName = context_11 && context_11.id;
    function createCells(amount, screen) {
      return Array(amount).fill(null).map(randCell(screen));
    }
    exports_11("createCells", createCells);
    function tickCell(cell, query, screen) {
      const bounced = bounce_ts_1.bounce(cell, screen);
      const body = keepInside_ts_1.keepInside(move(bounced), screen);
      const colliding = query(body).filter((x) => x !== cell);
      return {
        ...bounced,
        body,
        isColliding: Boolean(colliding.length),
      };
    }
    exports_11("tickCell", tickCell);
    function move(cell) {
      return cell.body.withPosition(cell.body.position.merge(cell.velocity));
    }
    function randCell({ start, end }) {
      return () =>
        cell(
          vector_ts_9.vector(
            math_ts_1.random(end.x, start.x),
            math_ts_1.random(end.y, start.y),
          ),
          math_ts_1.random(15, 5),
        );
    }
    function cell(position, size) {
      return {
        body: geometry_ts_3.circle(position, size),
        velocity: vector_ts_9.vector(
          math_ts_1.random(1, -1),
          math_ts_1.random(1, -1),
        ),
        isColliding: false,
      };
    }
    return {
      setters: [
        function (math_ts_1_1) {
          math_ts_1 = math_ts_1_1;
        },
        function (geometry_ts_3_1) {
          geometry_ts_3 = geometry_ts_3_1;
        },
        function (vector_ts_9_1) {
          vector_ts_9 = vector_ts_9_1;
        },
        function (bounce_ts_1_1) {
          bounce_ts_1 = bounce_ts_1_1;
        },
        function (keepInside_ts_1_1) {
          keepInside_ts_1 = keepInside_ts_1_1;
        },
      ],
      execute: function () {
      },
    };
  },
);
/// <reference lib="dom" />
System.register(
  "lulas/interaction",
  ["amq/math/vector"],
  function (exports_12, context_12) {
    "use strict";
    var vector_ts_10, mousePos, listenMouseMove;
    var __moduleName = context_12 && context_12.id;
    function mousePosition() {
      listenMouseMove();
      return mousePos;
    }
    exports_12("mousePosition", mousePosition);
    return {
      setters: [
        function (vector_ts_10_1) {
          vector_ts_10 = vector_ts_10_1;
        },
      ],
      execute: function () {
        mousePos = vector_ts_10.vector(-1, -1);
        listenMouseMove = () => {
          listenMouseMove = () => {};
          window.addEventListener("mousemove", (event) => {
            mousePos = vector_ts_10.vector(event.clientX, event.clientY);
          });
        };
      },
    };
  },
);
System.register(
  "lulas/render",
  ["amq/math", "amq/math/geometry/quadtree", "lulas/interaction"],
  function (exports_13, context_13) {
    "use strict";
    var math_ts_2, quadtree_ts_1, interaction_ts_1, Renderer;
    var __moduleName = context_13 && context_13.id;
    return {
      setters: [
        function (math_ts_2_1) {
          math_ts_2 = math_ts_2_1;
        },
        function (quadtree_ts_1_1) {
          quadtree_ts_1 = quadtree_ts_1_1;
        },
        function (interaction_ts_1_1) {
          interaction_ts_1 = interaction_ts_1_1;
        },
      ],
      execute: function () {
        Renderer = class Renderer {
          constructor(canvas) {
            this.canvas = canvas;
            this.leaf = 1;
            this.context = canvas.getContext("2d");
          }
          clear() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.leaf = 1;
          }
          renderCell({ velocity, body, isColliding }) {
            const { position, radius } = body;
            this.context.save();
            this.move(position);
            this.rotate(-45);
            this.rotate(velocity.degrees);
            this.context.beginPath();
            this.context.moveTo(radius, 0);
            this.context.lineTo(radius, radius);
            this.context.lineTo(0, radius);
            this.context.arc(0, 0, radius, math_ts_2.TAU / 4, math_ts_2.TAU);
            this.context.closePath();
            const isInteracting = body.contains(
              interaction_ts_1.mousePosition(),
            );
            this.context.fillStyle = isInteracting
              ? "yellow"
              : isColliding
              ? "red"
              : "#3B1E05";
            this.context.strokeStyle = isInteracting
              ? "transparent"
              : isColliding
              ? "yellow"
              : "#E9B111";
            this.context.lineWidth = 1;
            this.context.fill();
            this.context.stroke();
            this.context.restore();
          }
          renderQuad(tree) {
            if (quadtree_ts_1.isBranch(tree)) {
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
            this.context.strokeStyle = "rgba(255, 0, 0, 0.2)";
            this.context.lineWidth = 1;
            this.context.stroke();
            this.context.restore();
          }
          renderQuadInteractive(tree) {
            if (quadtree_ts_1.isBranch(tree)) {
              tree.children.forEach((x) => this.renderQuadInteractive(x));
              return;
            }
            const { area } = tree;
            this.context.save();
            this.move(area.position);
            this.context.fillStyle = "red";
            this.text(`${this.leaf}`);
            this.leaf++;
            if (area.contains(interaction_ts_1.mousePosition())) {
              this.context.beginPath();
              this.drawRectangle(area);
              this.context.closePath();
              this.context.fillStyle = "rgba(255, 0, 0, 0.2)";
              this.context.fill();
            }
            this.context.restore();
          }
          move(position) {
            this.context.translate(position.x, position.y);
          }
          rotate(degrees) {
            this.context.rotate(math_ts_2.degreesToRadians(degrees));
          }
          drawCircle({ radius }) {
            this.context.arc(0, 0, radius, 0, math_ts_2.TAU);
          }
          drawRectangle({ size }) {
            this.context.rect(-size.x, -size.y, size.x * 2, size.y * 2);
          }
          text(text) {
            this.context.font = "30px Arial";
            this.context.fillText(text, 0, 0);
          }
        };
        exports_13("Renderer", Renderer);
      },
    };
  },
);
System.register(
  "lulas/main",
  [
    "amq/game",
    "amq/dom/canvas",
    "lulas/cell",
    "amq/math/geometry/quadtree",
    "lulas/render",
  ],
  function (exports_14, context_14) {
    "use strict";
    var game_ts_1,
      canvas_ts_1,
      cell_ts_1,
      quadtree_ts_2,
      render_ts_1,
      QUAD_LIMIT,
      CELLS,
      screen,
      universe,
      canvas,
      renderer,
      pause;
    var __moduleName = context_14 && context_14.id;
    function tick({ cells: universe }) {
      const screen = canvas_ts_1.getScreen();
      const quad = quadtree_ts_2.quadtree(QUAD_LIMIT, screen, universe);
      const query = (x) => quadtree_ts_2.queryQuad(quad, x);
      const cells = universe.map((x) => cell_ts_1.tickCell(x, query, screen));
      return { cells, quad };
    }
    function render({ cells, quad }) {
      renderer.clear();
      renderer.renderQuad(quad);
      // renderer.renderQuadInteractive(quad!);
      cells.forEach((x) => renderer.renderCell(x));
    }
    return {
      setters: [
        function (game_ts_1_1) {
          game_ts_1 = game_ts_1_1;
        },
        function (canvas_ts_1_1) {
          canvas_ts_1 = canvas_ts_1_1;
        },
        function (cell_ts_1_1) {
          cell_ts_1 = cell_ts_1_1;
        },
        function (quadtree_ts_2_1) {
          quadtree_ts_2 = quadtree_ts_2_1;
        },
        function (render_ts_1_1) {
          render_ts_1 = render_ts_1_1;
        },
      ],
      execute: function () {
        QUAD_LIMIT = 3;
        CELLS = 100;
        screen = canvas_ts_1.getScreen();
        universe = cell_ts_1.createCells(CELLS, screen);
        canvas = document.querySelector("canvas");
        renderer = new render_ts_1.Renderer(canvas);
        pause = game_ts_1.loop(tick, render, { cells: universe });
        canvas_ts_1.fullscreen(canvas);
        window.addEventListener("click", pause);
      },
    };
  },
);

__instantiate("lulas/main");

