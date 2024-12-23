var findTheDifference = function(s, t) {

    // We have two strings and we need to find what is different about the two strings
let r;
for (let i = 0; i < s.length; i++) {
    r ^= s.charCodeAt(i);// stores UTF-16 numbers
}
for (let i = 0; i < t.length; i++) {
    r ^= t.charCodeAt(i);
}

return String.fromCharCode(r) // returns a string from a UTF-16 num
};