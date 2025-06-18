# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def goodNodes(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        def dfs(node, curr_max):
            if not node:
                return
            if node.val >= curr_max:
                count[0]+=1
                curr_max = node.val
            dfs(node.left, curr_max)
            dfs(node.right, curr_max)

        count= [0]
        dfs(root, root.val)
            
        return count[0]