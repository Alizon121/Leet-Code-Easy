class Solution(object):
    def minSubArrayLen(self, target, nums):
        """
        :type target: int
        :type nums: List[int]
        :rtype: int
        """
        
        # We need to use the smallest window method to obtain the min length of a subarray
        min_length = float('inf') # denotes infinity in Python
        cur_sum = 0
        left = 0

        for right in range(len(nums)):
            cur_sum += nums[right]

            while cur_sum >= target:
                if right - left + 1 < min_length: # "+1" accounts for the extra value in the right -> left window
                    min_length = right - left + 1 
                cur_sum -= nums[left]
                left+=1

        return min_length if min_length != float('inf') else 0