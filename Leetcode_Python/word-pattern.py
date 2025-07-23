class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        
        # We need to check if the pattern maps to "s"

        # We need to make two new dict() vars, check if the key-value pair exists, and add new key-value if it does not exist

        pattern_dict = dict()
        s_dict = dict()

        pattern_list = []
        for i in pattern:
            pattern_list.append(i)

        s = s.split(" ")

        if len(pattern_list) != len(s):
            return False

        for i,j in zip(s,pattern_list):
            if i in s_dict:
                if s_dict[i] != j:
                    return False
            else:
                s_dict[i] = j

            if j in pattern_dict:
                if pattern_dict[j] != i:
                    return False
            else:
                pattern_dict[j] = i

        return True