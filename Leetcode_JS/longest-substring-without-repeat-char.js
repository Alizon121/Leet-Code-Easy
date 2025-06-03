/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Info
    /*
        - We need to find a substring in string s
        - the substring needs to contain different character (NO DUPLICATES)
        - return longest sub
     */

    //  Plan
    /*
        - Use pointers to keep track of different characters in a row
        - use maxLen to store result
        - Iterate over the string
            - Update maxLen with the next longest contiguous sub
        - return maxLen
     */

     let pointer1 = 0
     let newSet = new Set()
     let maxLen = 0
     
     if (s.length === 0) return maxLen

     for (let pointer2 = 0; pointer2 < s.length; pointer2++) {
        while (newSet.has(s[pointer2])) {
            newSet.delete(s[pointer1])
            pointer1++
        }
       
       newSet.add(s[pointer2])
       maxLen = Math.max(maxLen, pointer2 - pointer1 + 1)
     }

     return maxLen
};