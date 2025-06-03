class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        new_set = set()
        pointer1 = 0
        max_len = 0

        for pointer2 in range(len(s)):
            while s[pointer2] in new_set:
                new_set.remove(s[pointer1])
                pointer1+=1

            new_set.add(s[pointer2])
            max_len = max(max_len, pointer2 - pointer1 + 1)

        return max_len