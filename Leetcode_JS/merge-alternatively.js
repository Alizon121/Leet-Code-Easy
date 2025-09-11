var mergeAlternately = function(word1, word2) {
    
    let result = ""
    let i = 2

    // "abc"
    // |
    // "pqr"
    // |

    for (let i = 0; i < word1.length || i < word2.length; i++) {
        if (word1[i]) {
            result += word1[i]
        }
        if (word2[i]) {
            result += word2[i]
        }
    }
    return result
};