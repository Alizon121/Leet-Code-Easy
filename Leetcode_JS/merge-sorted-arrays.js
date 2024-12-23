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