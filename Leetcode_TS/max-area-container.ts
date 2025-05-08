function maxArea(height: number[]): number {
    // Info
    /*
        - We need to find the max area that the container can have
     */

    //  Plan
    /*
        - declare pointers(number)
            - pointer1
            - pointer2
        - declare maxArea(number)
        - Iterate over the array and find the longest line
        - Check for maxAreas
     */


    let pointer1: number = 0
    let pointer2: number = height.length-1
    let maxArea: number = 0
    while (pointer2 > pointer1) {
        maxArea = Math.max(maxArea, (pointer2-pointer1) * Math.min(height[pointer1], height[pointer2]))
        if (height[pointer1] < height[pointer2]) {
            pointer1++
        } else{
            pointer2--
        }
    }
    return maxArea
};