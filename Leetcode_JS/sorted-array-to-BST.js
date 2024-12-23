var sortedArrayToBST = function(nums) {
    // A binary search tree has node values that are less than the starting node to the left
    // Node values that are greater than the current node should be to the right
    // The tree needs to be balanced (height of nodes should not be more than a difference of 1)

    if (!nums.length) return null

    // What is the starting node? -> middle most node?
    
    let mid = Math.floor(nums.length/2)
    let root = new TreeNode(nums[mid])

    // We need to have the values less than root on the left and greater than root on the right

    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    
    return root
};