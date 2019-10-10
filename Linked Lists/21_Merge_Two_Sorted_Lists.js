//https://leetcode.com/problems/merge-two-sorted-lists/

//Merge two sorted linked lists and return it as a new list.The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let list = new ListNode();
    let head = list;
    let current;

    while (l1 !== null || l2 !== null) {
        let v1 = l1 !== null ? l1.val : Infinity;
        let v2 = l2 !== null ? l2.val : Infinity;

        if (v1 > v2) {
            current = new ListNode(v2)
            l2 = l2.next
        } else {
            current = new ListNode(v1)
            l1 = l1.next
        }

        list.next = current
        list = list.next
    }

    return head.next
};