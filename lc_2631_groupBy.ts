declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const groupedObj = this.reduce((prev, current) => {
    const computedKey = fn(current);
    prev[computedKey] = undefined;
    return prev;
  }, {});

  for (const ikey in groupedObj) {
    groupedObj[ikey] = this.filter((item) => fn(item) === ikey);
  }

  return groupedObj;
};
