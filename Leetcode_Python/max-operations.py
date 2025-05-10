class Solution(object):
    def maxOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        pointer1 = 0
        pointer2 = len(nums)-1
        count = 0

        nums.sort()

        while pointer2 > pointer1:
            if nums[pointer2] + nums[pointer1] > k:
                pointer2 -= 1
            elif nums[pointer2] + nums[pointer1] < k:
                pointer1 += 1
            else:
                count += 1
                pointer1 += 1
                pointer2 -= 1
        return count