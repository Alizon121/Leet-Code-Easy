class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """

        prefix = strs[0] # it doesn't matter how long the first word is since the prefix has to be at least inside of the first word

        for i in strs[1:]:
            while not i.startswith(prefix):
                prefix = prefix[:-1] # reeduce the element in the string
                if not prefix:
                    return ""
            
        return prefix