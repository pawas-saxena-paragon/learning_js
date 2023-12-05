// https://leetcode.com/problems/memoize/

type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache: Record<string, number> = {};

  return function (...args) {
    const params: string = args.toString();
    const base64Params = Buffer.from(params).toString("base64");
    if (cache[base64Params] !== undefined) {
      return cache[base64Params];
    }

    return (cache[base64Params] = fn(...args));
  };
}
