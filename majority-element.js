var majorityElement = function(nums) {
    
    let n = nums.length
    let obj = {}
    
    for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
        obj[nums[i]]++
    } else {
        obj[nums[i]] = 1
    }
    }
    for (let el in obj) {
        if (obj[el] > n/2) return el
    }
    };