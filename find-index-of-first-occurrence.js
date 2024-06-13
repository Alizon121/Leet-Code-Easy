var strStr = function(haystack, needle) {
    // If needle is in haystack, then return needle
    // if needle is not in haystack, then return -1

    return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"))