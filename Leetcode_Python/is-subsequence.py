class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        spointer = 0
        tpointer = 0

        while spointer < len(s) and tpointer < len(t):
            if s[spointer] is t[tpointer]:
                spointer += 1
            tpointer +=1
        return spointer == len(s)