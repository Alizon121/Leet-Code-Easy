class Solution(object):
    def findDifference(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[List[int]]
        """
        
        set1 = set(nums1)
        set2 = set(nums2)
        result = [[], []]

        for i in set1:
            if i not in set2:
                result[0].append(i)

        for i in set2:
            if i not in set1:
                result[1].append(i)

        return result