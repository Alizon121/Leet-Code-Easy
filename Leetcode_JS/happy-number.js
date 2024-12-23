var isHappy = function(n) {

let attempt = {}
while (n !== 1) {
    n = sumOfSquares(n)

    if (attempt[n]) return false
    // The assignment below allows us to track all visited numbers
    attempt[n] = true
}
return true
}

function sumOfSquares(num) {
    let str = num.toString()
    let sum = 0

    for (let i = 0; i < str.length; i++) {
        // Obtain a UTF-16 value -> numbers are always the same
        let char = str.charAt(i)
        sum += (Math.pow(Number(char), 2))
    }
    return sum
}

console.log(isHappy(19))

