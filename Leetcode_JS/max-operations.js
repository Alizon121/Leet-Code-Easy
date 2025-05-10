/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    // Info
    /*
    - We need to find the nums[i] that = k
        - count++
    - If the number does not equal k, then skip
    */

    // Plan
    /*
        - Declare two pointers (0 and n-1) and count
        - While pointer1 < pointer2, add the nums[pointer1] + nums[pointer2]
            - if sum does not equal k, then pointer1++
            - if sum equals k, then pointer1++ pointer2--
        - Do we have to return the num of operations or nums array?
     */

    let pointer1 = 0
    let pointer2 = nums.length-1
    let count = 0
    nums.sort((a,b) => a-b)

    while (pointer2 > pointer1) {
        if (nums[pointer2] + nums[pointer1] === k) {
            count++;
            pointer2--
            pointer1++
        } else if (nums[pointer1] + nums[pointer2] > k) {
            pointer2--
        } else if (nums[pointer1] + nums[pointer2] < k) {
            pointer1++
        }
    }
    return count
};