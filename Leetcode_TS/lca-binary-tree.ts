function lowestCommonAncestorr(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || root == p || root == q) return root

    let left: TreeNode = lowestCommonAncestor(root.left, p, q)
    let right: TreeNode = lowestCommonAncestor(root.right, p, q)

    if (left && right) return root

    return left ? left : right

    return root
    
};