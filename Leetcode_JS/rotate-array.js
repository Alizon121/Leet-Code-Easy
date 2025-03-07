var rotate = function(nums, k) {

    // We want to remove the last element from the array
    // Add the last element to the front of the array k times
    // Iterate until k == 0
    const len = nums.length
    k = k % len

    const rotated = new Array(len).fill(0)

    for (let i = 0; i < len; i++) {
        rotated[(i+k) % len] = nums[i]
        // [0,0,0,0,0,0,0]
         // 5 6 7 1 2 3 4                

    }
    for (let i = 0; i < len; i++) {
        nums[i] = rotated[i]
    }
    
};