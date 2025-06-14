
//   Definition for a binary tree node.
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


function leafSimilarr(root1: TreeNode | null, root2: TreeNode | null): boolean {
    
    let root1Vals: number[] = []
    let root2Vals: number[] = []

    const collectValues = (root, rootVals) => {
        if (!root) return

        if (!root.left && !root.right) rootVals.push(root.val)
        collectValues(root.left, rootVals)
        collectValues(root.right, rootVals)
    }

    collectValues(root1, root1Vals)
    collectValues(root2, root2Vals)

    return root1Vals.toString() === root2Vals.toString()
};