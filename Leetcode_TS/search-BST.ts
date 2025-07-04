class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


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