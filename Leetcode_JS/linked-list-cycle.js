
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}



// @param {ListNode} head
//  * @return {boolean}

var hasCycle = function(head) {

    let currentFast = head
    let currentSlow = head
    // We need to ensure that the nodes required for a cycle exist
    while (currentFast && currentFast.next) {
        currentSlow = currentSlow.next;
        currentFast = currentFast.next.next

    // We need to compare the above nodes to determine if there is a cycle.
        if (currentSlow === currentFast) {
            return true
        }
    }
     return false
};

console.log(hasCycle([1,2,3,4], 1))