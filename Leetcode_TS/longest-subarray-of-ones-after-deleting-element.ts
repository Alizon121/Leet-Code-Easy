function longestSubarray(nums: number[]): number {
    let left:number = 0
    let zeroCounter: number = 0
    let max:number = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCounter++

        while (zeroCounter > 1){
            if (nums[left] === 0) {
                zeroCounter--
            }
            left++
        }
        max = Math.max(max, right - left)
    }
    return max
};