var convertToTitle = function(columnNumber) {
    // The columnNumber should return a number value

    let result = ""

    while (columnNumber > 0) {
        // Obtain an alphabetical value -> 1 to 25
        let r = columnNumber % 26
        // Obtain the next value of columnNumber
        let q = parseInt(columnNumber/26)


        if (r === 0) {
            // Then the ASCII value is 'Z'
            r = 26
            // Adjust fo rthe 26 letters in the alphabet
            q--
        }
        // static method returns a string created from the specified sequence of UTF-16 code units.
        // Use 64 since this is the ASCII val of "A" - 1.
        // Add the remainder to 64 to obtain the ASCII value
        // Prepend this value to the result empty string
        result = String.fromCharCode(64+r) + result

        // Update for next iteration
        columnNumber = q
    }
    return result
};