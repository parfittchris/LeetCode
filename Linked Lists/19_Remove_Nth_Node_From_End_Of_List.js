//https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/

//Given a linked list, remove the n-th node from the end of list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Slow Version
var removeNthFromEnd = function (head, n) {

    let current = head;
    let length = 1;

    while (current.next !== null) {
        length += 1;
        current = current.next
    }

    current = head;
    let previous;

    if (n > length) return null;
    if (length === 1) return null;
    if (length === n) {
        temp = head.next;
        head.next = null;
        head = temp;
        return head
    }

    for (let i = 0; i < length - n; i++) {
        previous = current;
        current = current.next;
    }

    previous.next = current.next;
    current.next = null;

    return head
};

// Fast Version

var removeNthFromEnd = function (head, n) {
    let tempHead = new ListNode();
    tempHead.next = head;

    let slowPointer = tempHead;
    let fastPointer = tempHead;

    for (let i = 1; i <= n + 1; i++) {
        fastPointer = fastPointer.next
    }

    while (fastPointer !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    slowPointer.next = slowPointer.next.next;
    return tempHead.next
};