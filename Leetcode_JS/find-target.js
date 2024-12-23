var findTarget = function(root, k) {
    
    let storage = []
    
    function inOrderTraversal(root) {
    if (!root) return
    inOrderTraversal(root.left)
    storage.push(root.val)
    inOrderTraversal(root.right)
    }
    
    
    inOrderTraversal(root)
    
        let first = 0;
        let last = storage.length-1
    while (first < last) {
        if (storage[first] + storage[last] === k) return true
        if (storage[first] + storage[last] > k) last--;
        if (storage[first] + storage[last] < k) first++
    }
    
        return false
    
    };