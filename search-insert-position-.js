var searchInsert = function(nums, target) {
    // We need to traverse the nums array to find a target
    // This is a binary search problem
    // We can recurse until we find the target, use a stack/queue, or do traditional binary search

    // We need to see if target if larger than any of the int in the nums array.
    // If the number is less than any of the int in the array, then return the index-1
    // If the number is greater than any of the int in the array, then return the index+1

   let first = 0;
    let last = nums.length -1

    while(last >= first) {
    let mid = Math.floor((last+first)/2)
    
    if (nums[mid] === target) {
        return mid
    }
    else if (nums[mid] < target) {
        first = mid + 1
    }
    else {
        last = mid - 1
    }
}

return first
}

console.log(searchInsert([1,3,5,6], 7))