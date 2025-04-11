/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Info:
    /*
        There is a substring located at the end of the string that we want to know the length of
     */

    //  Plan
    /*
        Remove the white space frmo the string
        Pass the string into an array
        return the last index's length
     */

    let array = s.trim().split(" ")

    return array[array.length-1].length
};