var lengthOfLastWord = function(s) {
 
    // We need to remove space from the end of the array
    let trim = s.trim();
    let arr = trim.split(" ")
    return (arr[arr.length-1].length)    
    };

    console.log(lengthOfLastWord("Hello World  "))