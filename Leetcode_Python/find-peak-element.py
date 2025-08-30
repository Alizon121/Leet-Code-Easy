import math

class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        # We need to do binary search
        left = 0
        right =len(nums) -1

        #     [1,2,3,1]
        # L        |
        # M.       |
        # R        |

        while left < right:
            mid = int(math.floor((left + right) /2))
            if (nums[mid] > nums[mid+1]):
                right = mid
            else:
                left = mid + 1

        return left