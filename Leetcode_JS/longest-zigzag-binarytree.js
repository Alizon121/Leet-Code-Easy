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
 * @return {number}
 */
var longestZigZag = function(root) {
    // We need to check every node for the longest zig zag path
    let count = 0


    function dfs(node, last, length = 0) {
        if (!node) return

        count = Math.max(count, length)
        dfs(node.left, "l", last !== "l" ? length + 1 : 1)
        dfs(node.right, "r", last !== "r" ? length + 1 : 1)
    }
    dfs(root, "r", 0)
    return count
};