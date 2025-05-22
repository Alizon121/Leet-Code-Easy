class Solution(object):
    def longestSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_ones = 0
        zero_counter = 0
        left = 0

        for right in range(len(nums)):
            if (nums[right] == 0):
                zero_counter += 1
            
            while (zero_counter > 1):
                if (nums[left] == 0):
                    zero_counter -= 1
                left +=1

            max_ones = max(max_ones, right - left)

        return max_ones