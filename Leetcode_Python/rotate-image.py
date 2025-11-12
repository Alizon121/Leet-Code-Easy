class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        
        # All the corners move to the end (move by two)
        # All numbers on the outside and in the middle shift one to the left/right and one up/down
        # The center value stays in-place

        # We need to determine the position of the matrix and shift accordingly
        l = 0
        n = len(matrix) - 1
        # [[1, 2, 3], 
        # [4, 5, 6], 
        # [7, 8, 9]])

        # [[7, 8, 9], 
        # [4, 5, 6], 
        # [1, 2, 3]]
        while l < n:
            matrix[l], matrix[n] = matrix[n], matrix[l]
            l+=1
            n-=1
            
        for i in range(len(matrix)):
         for j in range(i):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]