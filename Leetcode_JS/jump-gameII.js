/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    let jumps = 0;
    let start = 0;
    let end = 0;

    if (nums.length === 1) return 0

    for (let i = 0; i < nums.length; i++) {
        start = Math.max(start, nums[i] + i)

        if (i === end) {
            end = start
            jumps+=1
            if (start >= nums.length-1) {
                return jumps
            }
        }
    }
};