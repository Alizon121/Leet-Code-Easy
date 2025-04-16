/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Info
    /*
        - There are two strings
        - Haystack may contain needle
        - If it doesn't contain the needle, then we return -1
        - The needle will always be shorter than the haystack
     */

    //  Plan
    /*
        - Iterate over the haystack
        - Find every occurence of the needle in the haystack and return the first index (indices) at which the needles occur
        - Use the .includes() method 
        - else return -1
     */
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle)
    }
    return -1
};