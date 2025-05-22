/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // Info
    /*
    - We must delete one element
    - Return the longest substring of 1s
     */

    //  Plan
    /*
    - declare max, left, and ones counter variables
    - Iterate over the array
    - if nums[right] === 0, then nums[right] = 1
    - Move the window by using a condition and while loop: (while nums[right] === 1)
        - oneCounter++
        - left++
    - return max(max, oneCounter)
     */

     let max = 0
     let left = 0
     let zeroCounter = 0

     for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) zeroCounter++

        while (zeroCounter > 1) {
            if (nums[left] === 0) {
                zeroCounter--
            }
            left++
        }

        max = Math.max(max, right-left)
        console.log(max)
     }
     return max 
};