function findPeakElement(nums: number[]): number {

    let left:number = 0
    let right:number = nums.length-1

    //      [1,2,3,1]
    // L.        |
    // M         |   
    // R         |

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid+1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
};