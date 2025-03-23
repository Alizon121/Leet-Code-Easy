/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let finalPosition = nums.length-1;
    for (let idx=nums.length-2; idx>=0; idx--) {
        if (nums[idx] + idx >=finalPosition) {
            finalPosition = idx
        }
    }
    return finalPosition === 0
};