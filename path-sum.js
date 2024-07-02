var hasPathSum = function(root, targetSum) {
    // We need to traverse the tree and keep track of the nodes we pass to determine if the path adds up to targetSum.

    if (!root) return false
    // We need to account for leaves in the base case (e.g. not left or right)
    if (root.val === targetSum && (!root.left && !root.right)) return true
    // We need to recursively traverse a path and update the targetSum value on every call.
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum- root.val)

};