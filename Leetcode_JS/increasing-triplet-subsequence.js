/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // Info
    /*
        - We need to find triplets (indices and values)
        - All indices and values have to be increasing
        - return true
     */

    //  Plan
    /*
        - Declare three pointers
        - While k < nums.length
            - Check if i < j < k AND if nums[i] < nums[j] < nums[k]
                - If yes, then i++, j++, k++
            - else return false
     */
     let first = Infinity
     let second = Infinity

     for (let num of nums) {
        console.log(first, second)
        if (num <= first) {
            first = num
        } else if (num <= second) {
            second = num
        } else {
            return true // find a number greater than first and second
        }
     }
    return false
};