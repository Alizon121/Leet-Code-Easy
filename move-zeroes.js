var moveZeroes = function(nums) {
    // We have to move the non-zero integers to the front of the array and maintain their order
    // We have to change the index of the non-zero integers:
        // If not zero -> move to front
        // update the i value everytime a non-zero integer is moved to front

    if (nums.length === 1) return nums

    let i = 0; // Use as a pointer for putting the first non-zero integer


        for (let num of nums) {
                if (num !== 0) {
                    nums[i]= num
                    i++;
                }
             }
    // Add 0 to the array until filled
    while (i < nums.length) {
        nums[i] = 0;
        i++;
        console.log(i)
    }
}