/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length < 1) return 0

    nums = nums.sort((a,b) => a-b)

    let count = 1;
    let maxNum = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i-1] == 1) {
            count++;
            maxNum = Math.max(count, maxNum)
        } else if (nums[i] === nums[i-1]) {
            continue
        } else {
            count = 1
        }
    }
    return maxNum
};