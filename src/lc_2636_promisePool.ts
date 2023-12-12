// https://youtu.be/DB8pAAg-9xw?si=TdRVvtkHyayAJJLe
export function promisePool(
  fns: (() => Promise<any>)[],
  n: number,
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const nestedPromiseFns = nest(fns, n);
    let successResults = [];
    for (let i = 0; i < nestedPromiseFns.length; i++) {
      const promisePoolChunk = nestedPromiseFns[i];
      try {
        const chunkPromises = promisePoolChunk.map(
          //@ts-ignore
          (promiseFn: () => Promsie<any>) => promiseFn(),
        );
        const chunkSuccessResult = await Promise.all(chunkPromises);
        successResults = [...successResults, ...chunkSuccessResult];
      } catch (err) {
        return reject(err);
      }
    }

    resolve(successResults);
  });
}

export function nest(arr: any[], subArrLen: number): any[][] {
  const result: any[][] = [];

  const nested: any[][] = arr.reduce((prev, curr) => {
    prev = addToLastArr(prev, subArrLen, curr);
    return prev;
  }, result);

  return nested;
}

function addToLastArr(
  arr: any[][],
  desiredInnerSize: number,
  toAdd: any,
): any[] {
  if (arr.length === 0) {
    arr.push([toAdd]);
  } else {
    const lastElementLength = arr[arr.length - 1].length;
    if (lastElementLength === desiredInnerSize) {
      arr.push([toAdd]);
    } else {
      arr[arr.length - 1].push(toAdd);
    }
  }

  return arr;
}
