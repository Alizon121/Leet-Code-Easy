var countNodes = function(root) {
    let count = 1;
    let countLeft = 0;
    let countRight = 0;

if (!root) return 0
    countLeft += countNodes(root.left)
    countRight += countNodes(root.right)

    return count += countLeft + countRight
};