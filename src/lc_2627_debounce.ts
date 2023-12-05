// https://leetcode.com/problems/debounce/
type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let lastCalledTime = -Infinity;
  let lastTimeoutId = undefined;

  return function (...args) {
    const currentTime = new Date().getTime();
    if (currentTime - lastCalledTime >= t) {
      lastCalledTime = currentTime;

      createTimeout();
    } else {
      // move timeout ahead
      clear();
      createTimeout();
    }

    function clear() {
      lastTimeoutId && clearTimeout(lastTimeoutId);
      lastCalledTime = new Date().getTime();
    }

    function createTimeout() {
      lastTimeoutId = setTimeout(() => {
        lastCalledTime = new Date().getTime();
        fn(...args);
      }, t);
    }
  };
}
