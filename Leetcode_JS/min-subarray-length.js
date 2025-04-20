/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // Info
    /*
        - There is an array with POSITIVE int
        - What nums values >= target
            - Find the smallest length of of nums values
        - return 0 if not
     */

    //  Plan
    /*
        - Declare result var
        - Should I sort the array?
        - Declare pointers: i, j
        - Iterate over array
            - Move the pointers i++ or j++ depending on if the total is > or < target
     */

    let minLen = Infinity
    let left = 0
    let curSum =0

    for (let right = 0; right < nums.length; right++) {
        curSum += nums[right]

        while (curSum >= target) {
            if (right - left +1 < minLen) {
                minLen = right - left + 1 // The plus one accounts for the window of element between right and left
            }
                curSum -=nums[left] // remove the value from the window because ->
                left++ // WE ARE MOVING LEFT TO RIGHT!
        }
    }
    return minLen !== Infinity ? minLen : 0
};