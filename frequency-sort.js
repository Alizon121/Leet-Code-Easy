function frequencySort(arr) {
    // sort the numbers in ascending order based on how many times they occur
    
    let obj = {};
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++
    else obj[arr[i]] = 1
    }
    
     //  If a appears less frequently than b (values), this expression is negative, and a is placed before b.
    // If a and b (keys) have the same frequency, this expression sorts a and b in descending order.
    return arr.sort((a,b) => obj[a] - obj[b] || b -a )
    
    
    }