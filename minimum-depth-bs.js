var minDepth = function(root) {
    let leftHeight = 1;
    let rightHeight = 1;
    
    if (!root) return 0
    
    if (root.left) { 
        leftHeight += minDepth(root.left)
    }
    
    if (root.right) {
        rightHeight += minDepth(root.right)
    }
    
    if (!root.left) {
    return rightHeight
    }
    
    if (!root.right) {
        return leftHeight
    }
    
    return Math.min(leftHeight,rightHeight)
    };
