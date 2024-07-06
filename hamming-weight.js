var hammingWeight = function(n) {
    let count = 0    
    // Convert a base-10 into a binary value
    
    n = n.toString(2)
    
    for (let i = 0; i < n.length; i++) {
        if (n[i] == 1) count ++
    }
    return count
    };