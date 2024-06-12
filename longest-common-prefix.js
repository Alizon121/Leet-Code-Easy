// The solution below is incorrect. 
//We need to use the first sring in the array as the prefix and compare the prefix to other strings.
// Decrease the letters in the prefix until prefix matches letter with the next string.

var longestCommonPrefix = function(strs) {
    // A prefix are letters that precede a word and should be tow or more letters
    let obj = {};
    let prefix = [];
    let stringArray = strs.join("").split("");
    let emptyStr = ""

// We may not need to store the occurrence of elements in an obj.
    for (let i = 0; i < stringArray.length; i++) {
        // if the string has letters at the same index from [0] to ?, then 
        if(obj[stringArray[i]]) {
            obj[stringArray[i]]++;
        } else {
            obj[stringArray[i]]=1;
        }
        // for the number of elements in the array, if there are more than common letters for every element in the array,
        // then add to prefix)
    }


        let firstLetter = strs[0][0]
        let secondLetter = strs[0][1]
        let thirdLetter = strs[0][2]

        // The first to third letters need to match.
        for (let i = 1; i < strs.length; i++) {
        if (!strs[i].includes(firstLetter)) return emptyStr

        if (/*obj[key] >= strs.length &&*/ 
        firstLetter === strs[i][0]) prefix.push(firstLetter)
        if (secondLetter === strs[i][1] && strs[i].length > 2) prefix.push(secondLetter)
        if (thirdLetter === strs[i][2] && strs[i].length>3) prefix.push(thirdLetter)
        // push the keys where number meets condition
                }
                return prefix.join("")
            }


console.log(longestCommonPrefix(["cir","car"]))