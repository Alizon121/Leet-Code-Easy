class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        
        # An anagram contains the same number of letters occurring the same number of times
        # Divide the strs array, use two pointers to determine if two strings are anagrams
            # If they are, then add them to an array
            # Once there are no more anagrams, pass them into the results array

        anagram_map = {}

        for word in strs:
            sorted_word = "".join(sorted(word))
            
            if sorted_word in anagram_map:
                anagram_map[sorted_word].append(word)
            else:
                anagram_map[sorted_word] = [word]

        result = []
        for group in anagram_map.values():
            result.append(group)
            
        return result