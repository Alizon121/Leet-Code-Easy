# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def averageOfLevels(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: List[float]
        """
        
        if not root:
            return []

        result = []
        queue = deque([root]) # allows use to remove from the front

        while queue:
            level_size = len(queue)
            level_sum = 0.0

            for i in range(level_size):
                node = queue.popleft() # Is a similar method to unshift()
                level_sum += node.val

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            result.append(level_sum/level_size)

        return result