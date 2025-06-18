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

function goodNodess(root: TreeNode | null): number {
    
    if (!root) return 0

    let stack: [TreeNode, number][] = []
    let count: number = 0
    stack.push([root, -Infinity])

    while (stack.length) {
        const popped = stack.pop()
        if (!popped) continue
        let [node,max] = popped
        let {left, right, val} = node

        if (max <= val) {
            count++
            max = val
        }

        if (left) stack.push([left, max])
        if (right) stack.push([right, max])

    }

    return count


};