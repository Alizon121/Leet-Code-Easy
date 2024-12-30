# We need to check what characters in jewels match the char in stones
# When there is a match, we need to increment the count by 1
# return the count

class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        dictionary_stones = {}
        count = 0
        for char in stones:
            # Add 0 to ensure that we return at least 0
            dictionary_stones[char] = dictionary_stones.get(char,0) + 1
        for char in jewels:
            count += dictionary_stones.get(char, 0)
        return count