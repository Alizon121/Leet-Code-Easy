/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function longestZigZagg(root: TreeNode | null): number {
    let count: number = 0

    function dfs(node, last, length = 0){
        if (!node) return

        count = Math.max(count, length)
        dfs(node.left, "l", last !== "l" ? length + 1: 1)
        dfs(node.right, "r", last !== "r" ? length + 1: 1)
    }
    dfs(root, "r", 0)
    return count
};