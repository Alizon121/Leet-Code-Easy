var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a-b)
    nums2.sort((a, b) => a-b)
    // We need to return a new array that contain elements where nums1 and nums2 elements =
    let result = [];

    let i = 0, j = 0;

    while ( i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++
        }
        else if (nums1[i] > nums2[j]) {
            j++
        }
        else {
            result.push(nums1[i]);
            i++;
            j++;
        }

    }
return result
};