var isSymmetric = function(root) {
    
    // if the left node in a sub-tree === right node in other sub-tree
    // if the right node in a sub-tree === left node in other sub-tree
    
        function traverseTree(root1, root2){
            if (!root1 && !root2) return true
            if (!root1 || !root2) return false
    
            return root1.val === root2.val && traverseTree(root1.left, root2.right) && traverseTree(root1.right, root2.left)
        }
        return traverseTree(root.left, root.right)
    
    };