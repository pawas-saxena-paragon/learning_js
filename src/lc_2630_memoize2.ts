// https://leetcode.com/problems/memoize-ii/

type Fn = (...params: any) => any;

type CacheItem = { inputs: any[]; result: any };

class Cache {
  cache: CacheItem[];
  constructor() {
    this.cache = [];
  }
  addToCache(inputs, result): void {
    this.cache.push({ inputs, result });
  }

  areInputsSame(cacheInputs: any[], fnInputs: any[]): boolean {
    return cacheInputs.every(
      (cacheInputItem: any, index: number) =>
        fnInputs[index] === cacheInputItem,
    );
  }

  getFromCache(inputs: any[]): any | null {
    const match = this.cache.find((element: CacheItem) => {
      return this.areInputsSame(element.inputs, inputs);
    });

    return match ? match.result : null;
  }
}

export function memoize(fn: Fn): Fn {
  const cache = new Cache();

  return function (...args) {
    const matchFromCache = cache.getFromCache(args);
    if (matchFromCache !== null) {
      return matchFromCache;
    }

    const result = fn(...args);
    cache.addToCache(args, result);

    return result;
  };
}
