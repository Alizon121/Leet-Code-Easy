var reverseBits = function(n) {
    // We are given a 32bit binary integer and we need to reverse and return the base 10 val
    
    // We convert a base-10 to a binary
let binary = (n.toString(2))
binary = binary.split("").reverse()

while (binary.length < 32) binary.push(0)

binary = binary.join("")
console.log(binary)

// Change binary to a base-10
let decimal = parseInt(binary, 2)
return decimal
};