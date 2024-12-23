function plusOne(digits) {
// We need to add one to the last integer of the array.
// If the integer is  9, then we need to make the output [1,0]

// let result = []
// for (let i = 0; i < digits.length-1; i++) {
//     result.push(digits[i])
// }
// if (digits[digits.length-1] !== 9) {
// result.push(digits[digits.length-1] + 1)
// return result
// }
// else {
//     let lastNum = (digits[digits.length-1] + 1)
//     console.log(lastNum)
// }


// BigInt() converts a string into a bigInt
// We need to convert the BigInt inton a string using the toString() method since 'join' only works with arrays.
let str = BigInt(digits.join(''))
str++;
// Array.from() method will convert an interable object into an array. It takes an iterable object and a mapFn.
return Array.from(String(str), Number);
}

console.log(plusOne([1,2,3]))