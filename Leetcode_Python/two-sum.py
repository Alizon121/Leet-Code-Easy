class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        new_dict = dict()

        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in new_dict:
                return [new_dict.get(complement), i]
            new_dict[nums[i]] = i