var containsNearbyDuplicate = function(nums, k) {
    // We need to keep track of duplicates using a set
    // The set should only contain k elements or less
    
        let visited = new Set()
    for (let i = 0; i < nums.length; i++) {
       if (visited.has(nums[i])) return true // determine if duplicates exist
       visited.add(nums[i])
       if (visited.size > k) visited.delete(nums[i-k]) // Keep size of set smaller than k
    }
        return false
    };