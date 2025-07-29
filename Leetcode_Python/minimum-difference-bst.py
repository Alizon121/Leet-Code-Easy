# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def getMinimumDifference(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """
        
        # We need to keep track of the minimum absolute val of any two nodes

        self.prev = None
        self.min_val = float('inf')

        def in_order(node):
            if not node:
                return

            in_order(node.left) # in-order traversal

            # Do the thing
            if self.prev is not None:
                self.min_val = min(self.min_val, abs(node.val - self.prev))
            self.prev = node.val

            in_order(node.right) #in-order traversal

        in_order(root)
        return self.min_val