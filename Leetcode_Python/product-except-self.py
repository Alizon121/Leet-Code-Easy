class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        new_list = list()
        for i in range(len(nums)):
            new_list.append(1)

        left = 1
        for i in range(len(nums)):
            new_list[i] *= left 
            left *= nums[i] # Changes the value of left on each iteration
        

        right = 1
        for i in range(len(nums)-1, -1, -1):
            new_list[i] *= right
            right *= nums[i]

        return new_list