/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // Info:
    /*
        - If the value does not start with four or nine, then take the make value (e.g. 3000 if num = 3749) and add to result
        - If the value starts with four or nine, then emply subtractive form
        - We can add multiples of ten three times in a row (e.g. I, X, C, M) before emplying subtractive form
     */


    //  Plan
    /*
        1. Check if value starts with four or nine
            - NO, then find symbol and add to result
            - Yes, then round to either 50 or 100 and subtract I, V, X, etc.
     */

    const numString = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], 
        [1, 'I']
    ]

    let result = ""

    for ([number, string] of numString) {
        let count = Math.floor(num / number) // Find the remainder
        result += string.repeat(count)
        num -= number * count
    }
    return result
};