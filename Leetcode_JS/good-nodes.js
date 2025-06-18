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
var goodNodes = function(root) {
    // node x cannot be less than the root

    if (!root) return 0
    let count = 0
    let stack = []
    stack.push([root, -Infinity])

    while (stack.length) {
        let [node,max] = stack.pop()
        const {left, right, val} = node
        console.log(node, left)
        if (max <= val) {
            count++
            max = val
        }

        if (left) stack.push([left,max])
        if (right) stack.push([right,max])
    }
    return count
};