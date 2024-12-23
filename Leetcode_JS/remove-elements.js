var removeElement = function(nums, val) {
    // remove all val from nums array
    // return elements not equal to val -> must be in-place

    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        // Essentially creates a copy of the elements in the array -> (nums[j++]
        // if expected value, then the copy of the elements is equal to original copy of elements in array (e.g. nums[i])
        if (val !== nums[i]) nums[j++] = nums[i]
    }
    // return the reassigned j variable
    return (j)
};


console.log(removeElement([3,2,2,3], 3))