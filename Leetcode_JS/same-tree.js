var isSameTree = function(p, q) {

    // If the ndoes are empty, then they are identical
    if (!q && !p) return true
    // If one node is empty and the other is not, then they are not identical
    if (!p || !q) return false
    
    // Check if the current vals are equal;
    // Recurse  until no more nodes
     return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right,q.right)
    
    }