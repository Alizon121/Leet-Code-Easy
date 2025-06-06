function decodeStrin(s: string): string {
    
    let stack: (string | number)[] = []
    let str: string = ""
    let num: number = 0

    for (let i = 0; i < s.length; i++) {
            if (!isNaN(Number(s[i]))) {
                num = num * 10 + Number(s[i])
            } else if (s[i] === "[") {
                stack.push(str)
                stack.push(num)
                str = ""
                num = 0
            } else if (s[i] === "]") {
                const num = stack.pop() as number
                const prevStr = stack.pop() as string
                str = prevStr + str.repeat(num)
            } else {
                str += s[i]
            }
    }
    return str
};