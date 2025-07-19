class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        
        # We need to check if the two strings are the same letters and numbers

        counter_ransom_note = Counter(ransomNote)
        counter_magazine = Counter(magazine)

        for char in counter_ransom_note:
            if counter_ransom_note[char] > counter_magazine.get(char,0):
                return False
        return True