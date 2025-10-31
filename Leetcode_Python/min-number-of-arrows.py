class Solution(object):
    def findMinArrowShots(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        
        sorted_points = sorted(points,key=lambda x:x[1])
        thrown_arrows = 1
        curr_end = sorted_points[0][1]

        for i in range(1, len(sorted_points)):
            start = sorted_points[i][0]
            end = sorted_points[i][1]

            if (start > curr_end):
                thrown_arrows += 1
                curr_end = end

        return thrown_arrows