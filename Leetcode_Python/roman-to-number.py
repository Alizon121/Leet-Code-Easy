class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman_to_num = dict(
            I = 1,
            V = 5,
            X = 10,
            L = 50,
            C = 100,
            D = 500,
            M = 1000
            )

        count = 0

        for i in range(len(s)):
            if i < len(s)-1 and roman_to_num[s[i]] < roman_to_num[s[i+1]]:
                count = count - roman_to_num[s[i]]
            else:
                count = count + roman_to_num[s[i]]
        
        return count