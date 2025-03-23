class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        # We need to determine if we can jump to the end of the array (len(nums))
        # we need to check if we can reach at least the last index

        # Plan
        # Make a step counter
        # Check to see if we acn reach the end of the array from nums[step_counter] by adding the value to step_counter

        # step_counter = 0

        # while step_counter < len(nums):
        #     if nums[step_counter] == 0:
        #         if step_counter + nums[step_counter] >= len(nums)-1:
        #             return True
        #     if step_counter + nums[step_counter] >= len(nums)-1:
        #         return True
        #     step_counter+=1
        # return False

        final_position = len(nums)-1
        idx = len(nums)-2

        while idx >= 0:
            if nums[idx] + idx >= final_position:
                final_position = idx
            idx-=1
        return final_position == 0
            