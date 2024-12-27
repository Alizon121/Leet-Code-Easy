class Solution(object):
    # Use Type annotations to make the data types more readable (e.g. Optional[TreeNode], int, and -> 'int')
    # RANGESUMBST IS AN INSTANCE OF THE SOLUTION CLASS. INVOKE USING THE 'SELF' KEYWORD.
    def rangeSumBST(self, root, low, high):
        """
        :type root: Optional[TreeNode]
        :type low: int
        :type high: int
        :rtype: int
        """
        if root == None:
            return 0
            #Ignore the left sub-trees since they are going to smaller than 'low'
        if root.val<low:
            return self.rangeSumBST(root.right, low, high)
            # Ignore the right sub-trees since they are going to be greater than 'high'
        elif root.val > high:
            return self.rangeSumBST(root.left, low, high)
        else:
            return root.val + self.rangeSumBST(root.right, low, high) + self.rangeSumBST(root.left, low, high)

        