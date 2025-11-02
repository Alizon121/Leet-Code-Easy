function removeElement(nums: number[], val: number): number {
    
    // Make a shallow copy of original array using underscores
    // Push the vals that are not equal to "val" to copy array
    // return counter for the array

    // [3,2,2,3]

    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i]
            j++
        }
    }

    return j
};