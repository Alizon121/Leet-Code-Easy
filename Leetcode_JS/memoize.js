/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {}; //object to store the cahced key-values
  return function(...args) {
    const key = String(args); // stringify the args to store in obj
    if (key in cache) {
      return cache[key]; // return the value that is stored in cache
    }
    const result = fn(...args); // pass args into toriginal function
    cache[key] = result; // set new key-value
    return result;
  }
}