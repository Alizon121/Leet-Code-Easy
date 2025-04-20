/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Info
    /*
        - We need to return a list of triplet lists
        - There will be three pointers (i, j, k)
        - Pointeri !== pointerJ && PointerI !== pointerK, PointerJ !== pointerK
        - nums[i] + nums[j] + nums[k] has to equal 0 to be considered a triplet
     */

    //  Plan
    /*
        - Create three pointers
        - Create a result array
        - Iterate through the array
        - Check for the equality conditions
            - If one of the pointers have same values, then we need to increment that pointer
        - Check for the sum condition
            - For every triplet that meets the above conditions, then pass into an array and push to result
     */

     let result = []
     nums.sort((a,b) => a-b)

     for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let j = i+1
        let k = nums.length-1

        while(j < k) {
            let total = nums[i] + nums[j] + nums[k]
            if (total > 0) {
                k--
            }
            else if (total < 0) {
                j++
            }
            else  {
                result.push([nums[i], nums[j], nums[k]])
                j++

                while (nums[j] === nums[j-1] && j < k) { // j should always be less than k since the values are sorted
                    j++
                }
            }
        }

     }
  return result
};