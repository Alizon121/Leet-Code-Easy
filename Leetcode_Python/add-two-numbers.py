# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: Optional[ListNode]
        :type l2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """

        # Make a new linked list and use two pointers
        dummy = ListNode()
        curr = dummy
        carry = 0

        while l1 or l2 or carry:
            total = carry
            if l1:
                total += l1.val
                l1 = l1.next
            if l2:
                total+= l2.val
                l2 = l2.next

            print(total)

            num = total % 10
            carry = total // 10 # floor division
            curr.next = ListNode(num)
            curr = curr.next

        return dummy.next