//https://leetcode.com/problems/reverse-nodes-in-k-group/
//Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

//k is a positive integer and is less than or equal to the length of the linked list.If the number of nodes is not a multiple of k then left - out nodes in the end should remain as it is.

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
var reverseKGroup = function (head, k) {
    if (head === null) return head;


    let values = [];
    let reverse = [];

    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }

    while (values.length) {
        if (values.length >= k) {
            let temp = [];
            for (let i = 0; i < k; i++) {
                temp.push(values.shift())
            }

            for (let j = temp.length - 1; j >= 0; j--) {
                reverse.push(temp[j])
            }

        } else {
            reverse.push(...values)
            values = [];
        }
    }

    let newHead = new ListNode(reverse.shift());
    let nullHead = new ListNode;
    nullHead.next = newHead;

    while (reverse.length) {
        newHead.next = new ListNode(reverse.shift());
        newHead = newHead.next;
    }

    return nullHead.next
};