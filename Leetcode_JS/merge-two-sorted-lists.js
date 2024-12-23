/*
//  Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function(list1, list2) {
if (list1  === null) return list2
if (list2 === null) return list1

if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2) //If list1's value is less than or equal to list2's value, it sets list1.next to the result of merging the rest of list1 (i.e., list1.next) with list2, and then returns list1.
    return list1
} else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
}


};

console.log(mergeTwoLists([1,2,4], [1,3,4]))