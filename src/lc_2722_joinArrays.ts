// https://leetcode.com/problems/join-two-arrays-by-id/

function join(arr1, arr2) {
  const combinedArr = [...arr1, ...arr2];
  let result = [];

  combinedArr.sort((a, b) => a.id - b.id);
  let i = 0;

  while (i <= combinedArr.length - 1) {
    let current = combinedArr[i];
    let next = combinedArr[i + 1];

    if (next === undefined) {
      result.push(current);
      break;
    }

    if (current.id === next.id) {
      result.push({ ...current, ...next });
      i += 2;
    } else {
      result.push(current);
      i++;
    }
  }

  return result;
}
