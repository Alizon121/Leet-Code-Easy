var findMode = function(root) {
    let obj = {}
    
    let stack = [root]
    
    while (stack.length) {
        // shift could be avoided since it is not optimal
        let currNode = stack.pop()
        if (obj[currNode.val]) obj[currNode.val]++
        else obj[currNode.val]=1
    
    
        if (currNode.left) {
            stack.push(currNode.left)
        }
         if (currNode.right) {
            stack.push(currNode.right)
        }
    
    
    }
    
    
    // Can we avoid using the below for loop?
    let max = -Infinity
    for (let num in obj) {
        if (obj[num] > max) {
        // reassign max
        // reassign value in result
        max = obj[num];
        result = [num]
        }
        // Do not want greater than values both running
         if (obj[num] === max) result.push(num)
    }
    return result
    };