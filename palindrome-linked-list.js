var isPalindrome = function(head) {
    // Determine if the nodes in the linked list read the same forwards and backwards.
    // Store values in an array and use a helper funciton to determinie if the array's values = palindrome
    // Or we can use DFT

if (!head || ! head.next) return true;

// we need to check if the front traversal is the same as the reverse traversal

let result = [];

while (head) {
result.push(head.val)
head = head.next;
}

let left = 0
let right = result.length-1

while (left < right && result[left] === result[right]) { // The loop exits when the left val > right val -> Palindrome!
    left++;
    right--
}

return left >= right
}