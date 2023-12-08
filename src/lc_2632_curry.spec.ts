import { curry, curry2 } from "./lc_2632_curry";

describe("curry", () => {
  it("sum", () => {
    const curriedSum = curry(function sum(a, b) {
      return a + b;
    });

    expect(curriedSum(2)(3)).toEqual(5);
  });
  it("curry2 sum", () => {
    const curriedSum = curry2(function sum(a, b) {
      return a + b;
    });

    expect(curriedSum(2)(3)).toEqual(5);
  });
});
