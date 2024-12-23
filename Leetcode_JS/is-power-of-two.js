var isPowerOfTwo = function(n) {
    // We need to check whether n is a power of two
    // power of 2 is 2^num where num is a whole number

    let log = (Math.log2(n))

    if (log % 2 === 0 || log % 2 === 1) return true
    else return false
};