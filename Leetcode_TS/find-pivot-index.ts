function pivotIndexx(nums: number[]): number {
    let sum: number = nums.reduce((a,b) => a+b)

    let left:number = 0 // use this to keep track of the left side sum

    for (let i = 0; i < nums.length; i++) {
        if (left === sum - left - nums[i]) return i
        left+=nums[i]
    }
    
    return -1
};