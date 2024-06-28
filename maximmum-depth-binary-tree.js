var maxDepth = function(root) {
    
    let leftCount = 1
    let rightCount = 1

    if (!root) return 0

    if (root.left) {
        leftCount += maxDepth(root.left)
    }

    if (root.right) {
        rightCount += maxDepth(root.right)
    }

    if (leftCount > rightCount) {
        return leftCount
    }
    else return rightCount


};