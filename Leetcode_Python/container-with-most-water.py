class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        
        pointer1 = 0
        pointer2 = len(height)-1
        result = 0

        while pointer1 < pointer2:
            # Compare heights -> move pointers
            # Compare the diff in x-axis
            # Pass in the result in the max method to ensure we are comparing all vol
            result = max(result, (pointer2 - pointer1) * min(height[pointer1], height[pointer2])) # we need the min to avoid overflowing
            if height[pointer1] < height[pointer2]:
                pointer1 += 1
            else:
                pointer2 -= 1
        return result            