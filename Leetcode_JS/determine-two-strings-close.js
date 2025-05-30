/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    if (word1.length !== word2.length) return false

    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < word1.length; i++) {
        if (obj1[word1[i]]) obj1[word1[i]]++
        else obj1[word1[i]] = 1

        if (obj2[word2[i]]) obj2[word2[i]]++
        else obj2[word2[i]] = 1
    }

    if (Object.keys(obj1).sort().join("") !== Object.keys(obj2).sort().join("")) return false

    return Object.values(obj1).sort().join("") == Object.values(obj2).sort().join("")
};