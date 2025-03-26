class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # We need to find the min num of jumps to get to length
        # All test cases can reach length?

        # Plan
        # Set two variables, one at start and the other at start+1
        # Declare variable for keeping count of jumps
        # We will check to see if adding the values reach the length
        
        # j = len(nums)-2
        # count = 0

        # for i in range(len(nums)-1, -1, -1):
        #     # We need to check when jumping from i to i+j whcih value will result in the minimum amount of jumps
        #     if nums[j] + j >= len(nums) -1:
        #         return count
        #     elif nums[i] + nums[j] >= len(nums):
        #         count+=2
        #         return count
        #     elif nums[i] + nums[j] < len(nums):
        #         count+=2
        #         j-=1
        #     else:
        #         j-=1
        # return count

        n = len(nums)
        goal = n -1
        curr_dist, last_jump_index, jump = 0, 0, 0

        if n == 1:
            return 0

        for i in range(0, n):
            curr_dist = max(curr_dist, i + nums[i])

            if i == last_jump_index:
                print("AHSFVAKJSHF", i)
                print("IAJSFB", curr_dist)

                last_jump_index = curr_dist
                jump += 1

                if curr_dist >= goal:
                    return jump
        return jump