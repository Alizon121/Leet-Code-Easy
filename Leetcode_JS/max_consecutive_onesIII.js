/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    let left = 0;
    let max = 0;
    let zeroes = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroes++

        while (zeroes > k) {
            if (nums[left] === 0) {
                zeroes--
            }
            left++
        }

        max = Math.max(max, right - left + 1)

    }
    return max
};