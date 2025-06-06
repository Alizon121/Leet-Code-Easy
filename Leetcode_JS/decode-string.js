/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    // Plan
    // Use a stack to keep track of the string values
    // While a character is the same as character + 1, then pass the characters to a [] preceded by a num
    // If there are multiple values that have same value, then pass into the square bracket with the num
    // return decoded string
    
    let stack = []
    s = s.split("")
    let nums = "0123456789"

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "]") {
            stack.push(s[i])
            continue
        }
        let curr = stack.pop()
        let str = ""

        while (curr !== "[") {
            str = curr + str
            curr = stack.pop()
        }

        console.log(str)
        let num = ""
        curr = stack.pop();
        console.log(num)
        while (!Number.isNaN(Number(curr))) {
            num = curr + num
            curr = stack.pop()
        }
        stack.push(curr)
        stack.push(str.repeat(Number(num)));
        
        }
    return stack.join("")
};