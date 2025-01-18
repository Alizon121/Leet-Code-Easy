/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let obj = {}
    let result = null
    return function(...args) {
       const keys = JSON.stringify(args) // convert to a string to use as keys
       if (obj[keys]) { // Check if keys exist in the object
        return obj[keys]
       }
      const result = fn.apply(this, args) // use the apply method to call the original func. Use 'this' argument for correct context
      obj[keys]= result // Save the result in the cache

      return result
    }
}