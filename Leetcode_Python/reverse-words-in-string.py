class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        
        s = s.split()
        result = []

        list_no_white_space = [word.strip() for word in s]
        for i in range(len(list_no_white_space) -1,-1,-1):
            result.append((list_no_white_space[i]))

        return " ".join(result)