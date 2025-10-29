/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {

    const n = nums.length
    const K = k % n // normalize
    const b = n - K - 1
    
    swap(nums, 0, b)
    swap(nums, b + 1, n - 1)
    swap(nums, 0, n-1)
    
    function swap(nums: number[], start: number, end: number): void {
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }
    
    };