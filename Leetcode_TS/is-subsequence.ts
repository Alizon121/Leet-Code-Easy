function isSubsequence(s: string, t: string): boolean {
    // Info
    // We need to ensure that the indices in the t string are never changed
    // We need to check the string "s" to string "t"

    // Plan
    // declare a variable result(string)
    // declare a variable "j" (string)
    // Iterate over the string "t"
    // compare s[i] to t[i]
        // if s[j] ===t[i], then concat to result j++
        // else t[i]++
    // Compare the result to "s"

    let result: string = ""
    let j: number = 0

    for (let i = 0; i < t.length; i++) {
       if (t[i] === s[j]) {
        result +=s[j]
        j++
       }
    }
    
    return result === s
};