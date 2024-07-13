var missingNumber = function(nums) {
    // What is the range of the nums array?
    // Identify the missing number
    // Range = nums.length 
    // Use the Gaussian Summation formula to find the num that the list should add up to.


    let target = (nums.length *(nums.length+1))/2
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return target - sum
};