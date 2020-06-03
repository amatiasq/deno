import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { withAccessor } from "./withAccessor.ts";

interface ISut {
  readonly a: string;
}

const prop = withAccessor<ISut>();

class Sut implements ISut {
  constructor(readonly a: string) {}

  withA = prop("a", function (x) {
    return new Sut(x);
  });
}

Deno.test("WithAccessor: property is still accessible", () => {
  const sut = new Sut("value");
  assertEquals(sut.a, "value");
});

Deno.test("WithAccessor: can directly set property", () => {
  const sut = new Sut("value");
  const copy = sut.withA("other");
  assertEquals(copy.a, "other");
});

Deno.test("WithAccessor: can use setter function", () => {
  const sut = new Sut("value");
  const copy = sut.withA(() => "other");
  assertEquals(copy.a, "other");
});

Deno.test(
  "WithAccessor: can access previous value from setter function",
  () => {
    const sut = new Sut("value");
    sut.withA((x) => {
      assertEquals(x, "value");
      return "other";
    });
  },
);

Deno.test(
  "WithAccessor: can access self as second param in setter function",
  () => {
    const sut = new Sut("value");
    sut.withA((x, self) => {
      assertEquals(self, sut);
      return "other";
    });
  },
);

Deno.test("WithAccessor: can access this in setter function", () => {
  const sut = new Sut("value");
  sut.withA(function (x) {
    assertEquals(this, sut);
    return "other";
  });
});
