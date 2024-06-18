//  * Definition for a binary tree node.
//  function TreeNode(val, left, right) {
//      this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
/*
 * @param {TreeNode} root
 * @return {number}
 */

//  We want to take the difference (e.g.subtract) between each node and return the minimum value.
// We need to stop at each node and subtract one node from the other.

var minDiffInBST = function(root) {
    // We use infinity since all values are less than it.
let min = Infinity
helper(root, result = [])
// We need to strt with '1' since the rootnode is at '0'
for (let i = 1; i < result.length; i++) {
    min = Math.min(min, result[i] - result[i-1])
}
return min
};

function helper(root, result = []) {
if (!root) return
// in-order traversal
helper(root.left, result)
result.push(root.val)
helper(root.right, result)
}