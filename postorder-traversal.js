var postorderTraversal = function(root) {
    let result = [];

    let postOrder = (node) => {
        if (!node) return []
        postOrder(node.left)
        postOrder(node.right)
        result.push(node.val)
    }
    postOrder(root)
    return result
};