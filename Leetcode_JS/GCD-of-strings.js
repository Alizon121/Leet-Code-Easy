/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Info
    /*
        There are two strings and we want to known if one of the strings is divisble by the other
        One string should be divisible by the other if multiplying it is possible
        Return the largest string that divides into both strings
     */

    // Plan
    /*
        Check to see if str1 includes str2
        if Yes, return str2
        Else pop the last character of str2 and check to see if the str1 includes str2-1
            - Keep repeating this until no mroe characters.
        If str2 is empty, then return ""
     */

    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    const gcd = (len1, len2) => {
        while (len2 !== 0) {
            // This is the algorithm that allows us to decrease the length of the strings
            [len1, len2] = [len2, len1 % len2]
              6,    4
              4,    2
              2,    0
        }
        return len1
    }
        return str1.slice(0, gcd(str1.length, str2.length))
};