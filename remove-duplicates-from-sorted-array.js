var removeDuplicates = function(nums) {
    // We need to remvoe duplicates in the nums array
    // We need to keep the relative order of the int in the array
    // The array of unique  elements should be returned. We may need to replace duplicates with _
    if (nums.length === 0) return 0

   let j = 0;
   console.log(++j)
   for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i])   {
        /*the pre-increment operator (++j) increases the value before it is used, 
        while the post-increment operator (j++) increases the value after it is used.
        */
        nums[++j] = nums[i]
    }
}
return j + 1
};

console.log(removeDuplicates([1,1,2]))