var removeDuplicates = function(nums) {
    let k = 2

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k-2]) {
            nums[k]=nums[i]
            k++
        }
    }
    return k
    // First iter i++
    // [1,1,1,2,2,3]
    //      i  
    //  k    

    // Second iter k++
    // [1,1,1,2,2,3]
    //      i
    //    k


};