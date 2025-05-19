/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    // Info
    /*
        - There is a string
        - We want to know what substring(s) are of length k or greater
     */

    //  Plan
   /*
    - Use sliding window technique to add vowels in window of k and return max vowels
    */

    const findVowel = (letter) => {
        let vowels = "aeiou"
        return vowels.includes(letter)
    }

    let maxVowels = 0
    vowels = 0
    let left = 0

    for (let right = 0; right < s.length; right++) {
        if (findVowel(s[right])) {
            vowels++
        }

        // Make condition to check for window
        if(right - left + 1 === k) {
            // Do the thing
            maxVowels = Math.max(maxVowels, vowels)
            // Remove condition?
            if (findVowel(s[left])) {
                vowels--
            }
            left+=1
        }
    }

   return maxVowels
};