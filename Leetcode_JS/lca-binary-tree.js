/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // LCA is the most ancestor node of p and q
    // When p and q and from different sub-trees, the LCA is the parent node
    // When p and q are in the same sub-tree, then the LCA is the parent of the subtree

    if (!root || root == p || root == q) return root

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    if (left && right) return root


    return left ? left : right
};