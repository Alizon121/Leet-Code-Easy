/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    
    let starArray = s.split("")
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (starArray[i] === "*") {
            stack.pop()
        }
        else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};