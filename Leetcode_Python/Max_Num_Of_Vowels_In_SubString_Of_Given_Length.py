class Solution(object):
    def is_vowel(self, c):
        return c in {"a", "e", "i", "o", "u"}

    def maxVowels(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        max_vowel = 0
        left = 0
        vowel = 0

        # How to make the sliding window in Python:
        # 1. Declare variables to keep track of index (left and right) and iterate over the string 
        # 2. Set up condition for window: (right - left + 1) == k
        # 3. Remove the first value from window (left+=1) if value is target, 
        # 4. Decrease vowel count (vowel-=1) and add the next value at end

        for right in range(len(s)):
            if self.is_vowel(s[right]):
                vowel+=1

            # rt.     4
            # lt. 2
                # "abciiidef"

            if (right - left + 1) == k:
                # max_vowel = 1, vowel = 2
                max_vowel = max(max_vowel, vowel)
                # s[left] = "i"
                if self.is_vowel(s[left]):
                    vowel -= 1
                    # vowel = 0
                left += 1
        return max_vowel