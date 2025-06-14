/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let root1Vals = []
    let root2Vals = []
    const collectLeafValues = (root, rootVals) => {
        if (!root) return
        if (!root.left && !root.right) rootVals.push(root.val)

        collectLeafValues(root.left, rootVals)
        collectLeafValues(root.right, rootVals)
    }

    collectLeafValues(root1, root1Vals)
    collectLeafValues(root2, root2Vals)
    
    return root1Vals.toString() == root2Vals.toString()
};