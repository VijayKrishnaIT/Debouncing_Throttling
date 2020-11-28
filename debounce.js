const debounce = (fn, delay) => {
  let timeOut;
  //HOF
  return function (...args) {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
