/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // Info
    /*
        - We need to determine if the occurrences of each value are unique
     */

    //  Plan
    // Iterate over the array and make an object, if the values are different, then return true

    arr.sort((a,b) => a-b);
    const newSet = new Set();

    let count = 1;
    for (let i = 1; i < arr.length; i++) {
       if (arr[i] === arr[i-1]) count++
        else {
            if (newSet.has(count)) {
                return false
            }
            newSet.add(count)
            count = 1 //reset count for the next number
        }
    } 
    return !newSet.has(count)
};