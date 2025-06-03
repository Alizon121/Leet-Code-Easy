function removeStar(s: string): string {
    
    let stack: string[] = []
    let starArray: string[] = s.split("")

    for (let i = 0; i < s.length; i++) {
        if (starArray[i] === "*") {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join("")
};