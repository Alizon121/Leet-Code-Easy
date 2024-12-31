class Solution(object):
    def findJudge(self, n, trust):
        """
        :type n: int
        :type trust: List[List[int]]
        :rtype: int
        """
        # Edge case if there is no trust relationship
        if n == 1 and not trust:
            return 1

        # Trust counters
        # Increase the length of the list by (n+1)
        in_degree = [0] * (n+1)
        out_degree = [0] * (n+1)

        for a,b in trust:
            # update the element at a specific index to determine trust
            out_degree[a] +=1 # a trust someone else
            in_degree[b] += 1 # b is trusted by someone else

        # Start the range from 1 since the problem states 1 to n
        for person in range(1, n+1):
            if in_degree[person] == n -1 and out_degree[person] == 0:
                return person

        return -1