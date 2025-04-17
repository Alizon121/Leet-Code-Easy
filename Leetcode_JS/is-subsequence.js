/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Info
    /*
        t is the parent string
        s is the child string
        When we remove chars from parent string, if the subsequent string matches with the child string, then return true
        Does the child string have to start at index = 0?
     */

    //  Plan
    /*
        1. Keep track of the index of the child elements in the parent element?
            - If the index of the child elemnt in the parent element are all in increasing order, then return true
     */

    let tpointer = 0
    let spointer = 0

    while(spointer < s.length && tpointer < t.length) {
        if (t[tpointer] === s[spointer]) {
            spointer++
        }
            tpointer++
        } 
    return spointer === s.length
};