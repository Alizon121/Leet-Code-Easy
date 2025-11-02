
//  * Definition for a binary tree node.
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


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    let leftCount: number = 1
    let rightCount: number = 1

    if (root.left) {
        leftCount += maxDepth(root.left)
    }
    if (root.right) {
        rightCount += maxDepth(root.right)
    }

    return Math.max(leftCount, rightCount)
};