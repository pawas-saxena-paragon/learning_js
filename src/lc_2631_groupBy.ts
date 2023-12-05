declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const groupedObj = {};

  this.forEach((element) => {
    const computedKey = fn(element);
    if (groupedObj[computedKey] === undefined) {
      groupedObj[computedKey] = [element];
    } else {
      groupedObj[computedKey].push(element);
    }
  });

  return groupedObj;
};
