// https://leetcode.com/problems/function-composition/
export type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x: any) => x;
  }

  return functions.reduceRight((prevFn, nextFn) => {
    return (x: any) => {
      return nextFn(prevFn(x));
    };
  });
}
