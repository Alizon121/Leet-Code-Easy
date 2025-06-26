/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    if (!root) return []

    let queue = [root]
    let path = []
    // Display the right-most nodes first
    // If there are more left nodes than right nodes, then display those.
    while(queue.length) {
        let n = queue.length
        for (let i = 0; i < n; i++) {
            let curr =  queue.shift()
            if (i === n - 1) path.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        // How do we check if the left sub-tree is longer than the right sub-tree?
    }
    return path
};