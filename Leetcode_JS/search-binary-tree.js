var searchBST = function(root, val) {
    if (!root) return null

    if (root.val === val) return root

    if (root.val && root.val < val) {
        return root = searchBST(root.right, val)
    }


    if (root.val && root.val > val) {
        return root = searchBST(root.left, val)
    }
}