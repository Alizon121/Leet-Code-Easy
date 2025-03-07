var removeDuplicates = function(nums) {
    // If there is a duplicate, then replace it
    let j = 1;
    let i = 1;
    while (j < nums.length) {
        if(nums[j] !== nums[i-1]) {
            nums[i] = nums[j]
            i++
        } else {
            j++
        }
    }


// [0,0,1,1,1,2,2,3,3,4]
//    i
//    j
    
    return i
};