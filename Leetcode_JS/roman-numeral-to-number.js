/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    // Plan
    // Iterate over the "s" string
    // Determine whether "V", "X", has an "I" before it -> then do substraction
    // Determine whether "L" or "C" has an "X" before it -> then do substraction
    // Determine if "D" and "M" have a "C" before it -> then do subtraction

    let obj = {
        "I": 1,
        "V": 5,
        "X":10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let count = 0

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i+1]]) {
            count -= obj[s[i]]
        } else {
            count += obj[s[i]]
        }
    }
    return count
};