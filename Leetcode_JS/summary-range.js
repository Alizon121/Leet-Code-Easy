var summaryRanges = function(nums) {
    let result =[]
    let min = nums[0]
    
for (let i = 1; i <= nums.length; i++) {
    if (nums[i-1]+1 === nums[i]) continue // checks if the current number is a continuation of the range.
        if (min === nums[i-1]) {// Indicates a single number range
            result.push(`${min}`)
        } else { // The range has more than one number.
            result.push(`${min}->${nums[i-1]}`)
        }
        min = nums[i]

}
return result
};

console.log(summaryRanges([1,2,4,6,7,8,10]))