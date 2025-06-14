# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def leafSimilar(self, root1, root2):
        """
        :type root1: Optional[TreeNode]
        :type root2: Optional[TreeNode]
        :rtype: bool
        """
        
        root1Vals = []
        root2Vals = []

        def getValues(root, rootVals):
            if not root:
                return

            if not root.left and not root.right:
                rootVals.append(root.val)

            getValues(root.left, rootVals)
            getValues(root.right, rootVals)

        getValues(root1, root1Vals)
        getValues(root2, root2Vals)

        return str(root1Vals) == str(root2Vals)