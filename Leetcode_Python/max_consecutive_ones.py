class Solution(object):
    def longestOnes(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        left = 0
        zeroes = 0
        max_zeroes = 0

        #                      3
        #          4
        # [1,1,1,0,0,0,1,1,1,1,0]

        for right in range(len(nums)):
            if (nums[right] == 0):
                zeroes += 1
        
            while (zeroes > k):
                if (nums[left] == 0):
                    zeroes -= 1
                left += 1
            max_zeroes = max(max_zeroes, right - left + 1)
        return max_zeroes