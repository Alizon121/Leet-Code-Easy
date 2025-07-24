class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        
        # Use a hashmap to determine if s can be made into t
            # Check to see that each letter occurs the same amount of times

        s_dict = {}
        t_dict = {}

        s_list = [char for char in s]
        t_list = [char for char in t]

        for i in s_list:
            if i not in s_dict:
               s_dict[i] = 1
            else:
                s_dict[i] += 1

        for i in t_list:
            if i not in t_dict:
                t_dict[i] = 1
            else:
                t_dict[i] += 1

        if s_dict.keys() == t_dict.keys() and s_dict.values() == t_dict.values():
            return True
        else:
            return False