function searchBSTt(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null

    if (root.val === val) return root

    if (root.val > val) {
        return root = searchBST(root.left, val)
    }

    if (root.val < val) {
        return root = searchBST(root.right, val)
    }
};