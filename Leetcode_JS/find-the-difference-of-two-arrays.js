/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const newMap1 = new Set(nums1)
    const newMap2 = new Set(nums2)
    let result = [[], []]

    for (let i of newMap1) {
        if (!newMap2.has(i)) {
            result[0].push(i)
        }
    }

    for (let i of newMap2) {
        if (!newMap1.has(i)) {
            result[1].push(i)
        }
    }
    return result
};