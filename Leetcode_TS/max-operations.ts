function maxOperations(nums: number[], k: number): number {
    let pointer1: number = 0
    let pointer2: number = nums.length-1
    let count:number = 0

    nums.sort((a,b) => a-b)

    while (pointer2 > pointer1) {
        if (nums[pointer1] + nums[pointer2] === k) {
            count++
            pointer1++
            pointer2--
        } else if (nums[pointer1] + nums[pointer2] > k) {
            pointer2--
        } else {
            pointer1++
        }
    }
    return count
};