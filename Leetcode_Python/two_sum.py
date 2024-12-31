# We want to check if any of the int in nums add up to the target
# If the nums add up to the target, then return the INDICES in a list

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # result = []
        # for num1 in nums:
        #     for num2 in nums[1:]:
        #         if num1 + num2 == target:
        #            result.append(nums.index(num1)), result.append(nums.index(num2))
        # return list(set(result))

        seen = {}
        # enumerate creates tuples of index and value
        for i, num in enumerate(nums):
            # i is the index and num is the value
            complement = target - num # 9 - 2 = 7 or 9 - 7 = 2

            if complement in seen:
                return [seen[complement], i]
            seen[num] = i

        return []