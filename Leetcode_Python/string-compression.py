class Solution(object):
    def compress(self, chars):
        """
        :type chars: List[str]
        :rtype: int
        """

        n = len(chars)
        idx = 0
        i = 0

        while i < n:
            ch = chars[i]
            count = 0
            while i < n and chars[i] == ch:
                i+=1
                count+=1 # Will count the number of same values in a row 
            if count == 1:
                chars[idx] = ch
                idx+=1
            else:
                chars[idx] = ch
                idx+=1
                for num in str(count): # Set the string with new values
                    chars[idx] = num
                    idx+=1
        chars[:] = chars[:idx]
        return idx