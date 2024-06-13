var removeElement = function(nums, val) {
    // remove all val from nums array
    // return elements not equal to val -> must be in-place

    // if (nums.length === 0) return 1;

    for (let i = 0; i < nums.length; i++) {
        nums[i++] = i
        // if (val !== nums[i])
    }
    return (nums)
};


console.log(removeElement([3,2,2,3], 3))