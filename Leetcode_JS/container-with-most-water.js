/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Info
    /*
        - max height is the lenght of array
        - each int value is a height
        - The max volume in example is located at (1,0) and (8,7) -> The x-axis is essential to determine container with largest vol
     */

    // Plan
    /*
     - Find the first largest num (indexOf(n))
     - Iterate from the largest num index to the largest and farthest value
     - Multiply the smallest height of container by the length
    */
    let pointer1 = 0
    let pointer2 = height.length-1
    let max = 0

    while (pointer1 < pointer2) {
        max = Math.max(max, (pointer2-pointer1)*Math.min(height[pointer2], height[pointer1]))
        if (height[pointer1]< height[pointer2]) {
            pointer1++
        } else {
            pointer2--
        }
    }
    return max
};