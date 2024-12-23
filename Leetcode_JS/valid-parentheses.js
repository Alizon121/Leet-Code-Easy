// var isValid = function(s) {
//     let valid = {
//         "1" : "()",
//         "2" : "[]",
//         "3" : "{}"
//     }

//         // We need each character to equal the values in valid object
//     // if (s === (valid["1"]) || s === (valid["2"]) || s === (valid["3"])) return true

//     // return false
//     }


let isValid = function(s) {

    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push(")");
        else if (s[i] === "[") stack.push("]")
        else if (s[i] === "{") stack.push("}")

        else if (stack.pop() !== s[i]) return false

    }
    /*If the stack is empty (stack.length === 0), 
    it means all opening symbols had matching closing symbols in the correct order, 
    and thus the string is valid.*/
    
    return !stack.length
}




console.log(isValid("["))
