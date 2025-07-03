function mergeStringAlt(word1: string, word2: string): string {
let str: string = ""
let i = 0
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            str+=word1[i]
        } 
        if (i < word2.length) {
            str+=word2[i]
        }
        i++
    }
return str
};