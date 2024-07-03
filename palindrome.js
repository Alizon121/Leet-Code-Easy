var isPalindrome = function(s) {
    s = s.toLowerCase()
    // '//' is a delimiter
    // ^ negates all characters not identified
    // [] denotes a characters class that selects all char not identified in []
    // 'g' is global flag and selects all char from start to end

    s = s.replace(/[^a-z0-9]/g, "")
    let string = ''
    if (!s) return true

    for (let i = s.length-1; i >= 0; i--) {
      string += s[i]
    }

    if (string === s) return true
    return false
}; 

console.log(isPalindrome("A man, a plan, a canal: Panama"))