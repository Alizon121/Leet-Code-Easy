class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        
        new_set = set()
        count = 1
        arr.sort()

        for i in range(1, len(arr)):
            if arr[i] == arr[i-1]:
                count += 1
            
            
            else:
                if count in new_set:
                    return False
                new_set.add(count)
                count=1
        
        return count not in new_set