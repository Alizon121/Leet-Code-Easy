function isHappy(n: number): boolean {
    // We need to square and sum the number's digits
    // while the number does not equal one, we should sum the digits
    // How do we separate the digits? Should we convert into a string and then back into a number? Should we keep a hashmap and pass in each digit, then use the number in hashmap later

    let visited = new Set()
    while (n != 1 && !visited.has(n)) {
        visited.add(n)
        n = sumSquare(n)
    }

    function sumSquare(n: number) : number {
        let total: number = 0
        let digit: number

        while (n > 0) {
            digit = n % 10
            total += digit * digit
            n = Math.floor(n/10)
        }
        return total
    }


return n === 1
}