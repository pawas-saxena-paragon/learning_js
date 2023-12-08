var once = function (fn) {
  let calledTimes = 0;

  return function (...args) {
    if (calledTimes === 0) {
      calledTimes += 1;
      return fn(...args);
    }
  };
};
