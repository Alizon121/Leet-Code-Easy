/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // Info
    /*
        - The numbers array contains two numbers that SUM to the target
        - We need to return the indices of these numbers that add up to target
        - The indices should be n + 1
     */

     // Plan
     /*
        - We need to create two pointers
        - We need to make another array that is a shallow copy of the original
        - Check to see if numbers[pointer] + numbersCopy[pointer2] = tar
        - Move the pointers if the numbers don't add up
      */

        let pointer1 = 0
        let pointer2 = numbers.length-1

        while (pointer1 < pointer2) {
            let total = numbers[pointer1] + numbers[pointer2]

            if (total === target) {
                return [pointer1 + 1, pointer2 + 1]
            } else if (total > target) {
                pointer2--
            } else {
                pointer1++
            }
        }
};