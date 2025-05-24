class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        sum = 0
        for i in range(len(nums)):
            sum += nums[i]

        left = 0
        for i in range(len(nums)):
            if (left == sum - left - nums[i]):
                return i
            left += nums[i]

        return -1
        