var isBalanced = function(root) {

    // We declare a variable to equal true.
    let isBal = true;
    
        // We need to find the height at every node, and then we need to determine if the height is more than 1.
    
    function maxDepth(root) {
        // no tree is a balanced tree
    if (!root) return true
    
    let leftHeight = maxDepth(root.left)
    let rightHeight = maxDepth(root.right)
    
    // Determines if the height at each node is greater than 1
    if (Math.abs(leftHeight - rightHeight > 1))  isBal = false
    
    // return the max Depth of the tree
    return Math.max(leftHeight, rightHeight) + 1
    }
    // Invoke the function
    maxDepth(root)
    
    // Return the value of isBal
    return isBal
    
    };