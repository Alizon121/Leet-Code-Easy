/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        for (let i = functions.length-1; i >= 0; i--) {
            let func = functions[i]
            x = func(x)
        }
        return x
    }
};