/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Info
    /*
        We are given a string and we need to reverse the order of the WORDS only
        There may be more than one space between words -> ensure a max of only one space in return result
     */

    //  Plan
    /*
        1. Use the split method to create a list
        2. Remove the whitespace form the list
        3.Use the filter method to remove the whitespace between strings
        4. return result.join(" ")
     */


    // Test -> Does not pass due to whitespace cases
        // return s.trim().split(" ").reverse().join(" ")

    let list = s.split(" ")
    let listWithoutWhiteSpace = list.filter(e => e.trim())


    return listWithoutWhiteSpace.reverse().join(" ")
};