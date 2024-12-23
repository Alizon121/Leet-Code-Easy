var reverseString = function(s) {
    // We need to conduct an in-place reversal of a string
        // We need to update the last index to become the first index

    // We could have an index at 0 and another at the length
    // while the two indexes are not equal -> have the last index become the ith index
    // Increase i and decrease other index

    let i =0;
    let j = s.length-1

    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--
    }
};