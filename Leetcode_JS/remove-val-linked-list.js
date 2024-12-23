var removeElements = function(head, val) {
    if (!head) return head
/*Ensures that the head of the list does not contain the target value (val). 
It handles the scenario where the initial few nodes all have the value that needs to be removed. */
    while (head) {
        if (head.val === val) {
            head = head.next
        } else break
    }

    let node = head
    while (node && node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head
};