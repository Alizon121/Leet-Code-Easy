function isValid(s: string): boolean {

    let stack: string[] = []
    let pairs: Record<string, string> = {
        "}": "{",
        ")": "(",
        "]": "["
    }

    for (let letter of s) {
        if (letter === "(" || letter === "{" || letter === "[") {
            stack.push(letter)
        } else {
        if (stack.length === 0) return false
        let curr = stack.pop()
        if (curr !== pairs[letter]) return false
        }
    }
    return stack.length === 0
};