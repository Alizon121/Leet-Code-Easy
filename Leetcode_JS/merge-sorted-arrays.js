var merge = function(nums1, m, nums2, n) {
    // We need to merge two arrays in non-decreasing order (ascending)
    // We need to store the newly merged array into nums1
    // We need to increase nums1 length using 'm' + 'n'

    // Find a way to reassign zeros in num1 array with values frmo nums2

    for (let i =m, j = 0; j<n; i++, j++) {
            nums1[i] = nums2[j]
        }
        nums1.sort((a,b) => a-b)

};

// Alternative Solution
var merge = function(nums1, m, nums2, n) {
    // Compare the elements in nums2 to elements in nums1
    // if an element is greater, then push to end of nums1 
    if (n === 0) return
        let len1 = nums1.length
        let endIndex = len1 - 1
        
        while (n > 0 && m > 0) {
            if (nums2[n-1] >= nums1[m-1]) {
                nums1[endIndex] = nums2[n-1]
                n--
            } else {
                nums1[endIndex] = nums1[m-1]
                m--
            }
            endIndex--
        }
        while (n>0) {
            nums1[endIndex] = nums2[n-1]
            n--
            endIndex--
        }
};