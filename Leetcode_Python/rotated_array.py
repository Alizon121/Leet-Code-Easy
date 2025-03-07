class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        # We need to create a shallow copy of the original array?
        k = k % len(nums)
        list_copy = nums[:]

        # k = 3
        # [1, 2, 3, 4, 5, 6, 7]

        for i in range(0, len(list_copy)):
            list_copy[(i+k) % len(nums)] = nums[i]
        
        # Replace original elements with rotated
        for i in range(len(nums)):
            nums[i] = list_copy[i]