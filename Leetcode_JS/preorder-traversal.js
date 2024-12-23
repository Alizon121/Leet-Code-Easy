var preorderTraversal = function(root) {

    let result = []
    
    // Requires a helper function separate the function tasks -> initialize variables (main) and recursively call helper function
    
    let preOrder = (node) => {
        if (!node) return []
         result.push(node.val)
        preOrder(node.left)
        preOrder(node.right)
    }
    
    preOrder(root)
        return result
    };