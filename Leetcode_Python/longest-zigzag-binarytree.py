# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def longestZigZag(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """
        

        self.count = 0
        def dfs(node, left, right):
            if not node:
                return
            
            self.count = max(self.count, left, right)
            if node.left:
                dfs(node.left, right+1, 0)
            if node.right:
                dfs(node.right, 0, left+1)
        
        dfs(root, 0, 0)
        return self.count
                