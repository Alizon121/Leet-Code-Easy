function canJump(nums: number[]): boolean {
    // We need to use nums[i] as a jump number
    // The jumps do not have to be maxed out
    // return true/false

    // [2,3,1,1,4]
    //  |

    let numsLength = nums.length - 1
    for (let i = numsLength; i >= 0; i--) {
        if (nums[i] + i >= numsLength) {
            numsLength = i
        }
    }
    return numsLength === 0
};