class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        max = 0

        for i in range(len(candies)):
            if candies[i] > max:
                max = candies[i]

        return [candy + extraCandies >= max for candy in candies]