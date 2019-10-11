//https://leetcode.com/problems/rotate-list/
//Given a linked list, rotate the list to the right by k places, where k is non-negative.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null) return head;

    let newHead = head;
    let newTail;

    for (let i = 0; i < k; i++) {
        let newNode = newHead;

        while (newNode.next !== null) {
            newTail = newNode;
            newNode = newNode.next;
        }

        newTail.next = null;
        newNode.next = newHead;
        newHead = newNode;
    }

    return newHead
};

