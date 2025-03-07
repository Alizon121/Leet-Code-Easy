class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        j = 1
        i = 1

        while j < len(nums):
            if nums[j] != nums[i-1]:
                nums[i] = nums[j]
                i = i + 1
            else:
                j = j +1

        return i