var compress = function(chars) {
    // Info
    /*
        - Compress the characters in the char array
        - We need to declare an empty string s
        - If the char group is 1, then concat to "s"
        - Else append the char group and the number of chars
            - If the group's chars is greater than 10, then split the number into multiple characters (e.g. 11 is "1" "1")
     */

    //  Plan
    /*
        - Declare s
        - Declare an empty obj
        - Iterate over the array and set the key-value
     */

    let length = chars.length
    let idx = 0

    for (let i = 0; i< length; i++) {
        let ch = chars[i]
        let count = 0
        while (i < length && chars[i] === ch) {
            count++
            i++
        }
        if (count === 1) {
            chars[idx++] = ch // The increment doesnt occur until outside of the conditional
        } else {
            chars[idx++] = ch
            // Set the number by using the index
            for (let num of count.toString()) {
                chars[idx++] = num
            }
        }
        i--
    }
        chars.length = idx
        return idx
};