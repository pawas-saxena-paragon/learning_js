import { memoize } from "./lc_2630_memoize2";
describe("memoize2", () => {
  it("[2,2],[2,2],[1,2]", () => {
    const demoSpy = jest.fn();

    const memoized = memoize(demoSpy);

    memoized(2, 2);
    memoized(2, 2);
    memoized(1, 2);

    expect(demoSpy).toHaveBeenCalledTimes(2);
  });
});
