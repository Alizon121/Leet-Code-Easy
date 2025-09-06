class Solution(object):
    def countBits(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        
        new_list = [0] * (n+1)
        for i in range(1, len(new_list)):
            if (i % 2 == 0):
                new_list[i] = new_list[i>>1]
            else:
                new_list[i] = new_list[i-1] +1

        return new_list 