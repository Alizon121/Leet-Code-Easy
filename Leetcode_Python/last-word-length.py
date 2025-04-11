class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """

        string_list = s.strip().rsplit(" ")

        return len(string_list[len(string_list)-1])
