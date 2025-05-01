class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        # is keyword checks for memory equality
        if str1 + str2 != str2 + str1:
            return ""

        def find_GCD(len1, len2):
            while (len2 != 0):
                [len1, len2] = [len2, (len1 % len2)]
            return len1

        return str1[0:find_GCD(len(str1), len(str2))]