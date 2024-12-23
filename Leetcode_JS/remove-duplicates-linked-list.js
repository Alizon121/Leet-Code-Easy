/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head
    while (current && current.next) {
        if (current.val === current.next.val) {
            //If a duplicate is found, current.next = current.next.next changes the next    
            //pointer of the current node to skip over the duplicate node.
            current.next = current.next.next 

        } else {

            // no duplicate is found, or after removing a duplicate, you move the current 
            // pointer to the next node
            current = current.next
        }
    }
    return head
};