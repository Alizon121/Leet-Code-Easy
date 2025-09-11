function fizzBuzz(n: number): string[] {
    let result: string[] = []

    for (let i = 1; i < n+1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        }

        if (i % 3 === 0 && i % 5 !== 0){
            result.push("Fizz")
        }

        if (i % 5 === 0 && i % 3 !== 0) {
            result.push("Buzz")
        }

        if (i % 3 !== 0 && i % 5 !== 0) {
            result.push(String(i))
        }
    }

    return result
};