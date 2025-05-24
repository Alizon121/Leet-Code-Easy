/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // Info
    // - The numbers in the array can be added when separated at a certain index
    
    /* 
    - Declare two vars: leftSum, rightSum
    - Iterate forwards and iterate backwards
    - if leftSum === rightSum, then return indexOf(leftSum)
    - else return -1
    */

   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
    sum+= nums[i]
   }

   let left = 0

   for (let i = 0; i < nums.length; i++) {
    // sum - left - nums[i] Keeps track of the right side
    if (left === sum - left - nums[i]) return i
    left+=nums[i]
   }

    return -1
};