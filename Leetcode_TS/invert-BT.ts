
//  Definition for a binary tree node.
 class TreeNodeInvert {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNodeInvert | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null

    let left: TreeNodeInvert | null = root.left
    let right: TreeNodeInvert | null = root.right

    root.right = invertTree(left)
    root.left = invertTree(right)

    return root
};