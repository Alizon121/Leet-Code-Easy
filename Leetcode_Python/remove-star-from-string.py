class Solution(object):
    def removeStars(self, s):
        """
        :type s: str
        :rtype: str
        """
        
        stack = []
        star_array = list(s)

        for i in range(len(s)):
            if star_array[i] == "*":
                stack.pop()
            else:
                stack.append(s[i])

        return "".join(stack)