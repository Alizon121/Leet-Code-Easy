var addBinary = function(a, b) {
    // We are given a string of numbers that represent binary.
    // We need to convert the binary into decimal using BigInt() with 0b notation to properly convery into a BigInt val?

let decimal = BigInt('0b' + a)
let decimal2 = BigInt('0b' + b)

let decimalSum = (decimal + decimal2)

return decimalSum.toString(2)


};