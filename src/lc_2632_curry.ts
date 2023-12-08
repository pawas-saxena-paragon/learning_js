// https://youtu.be/pi4kqMWQXxA?si=NoXhfZOJFuWaUcZu
export function curry(fn): any {
  let tempArgs = [];
  const acceptedArgsByFn: number = fn.length;

  return function curried(...args) {
    tempArgs = [...tempArgs, ...args];
    if (tempArgs.length === acceptedArgsByFn) {
      return fn(...tempArgs);
    } else {
      return curried;
    }
  };
}

export function curry2(fn): any {
  return function curried2(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried2(...args, ...newArgs);
      };
    }
  };
}
