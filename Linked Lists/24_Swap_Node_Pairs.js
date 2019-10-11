//https://leetcode.com/problems/swap-nodes-in-pairs/
//Given a linked list, swap every two adjacent nodes and return its head.
//You may not modify the values in the list's nodes, only nodes itself may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) return head

    let temp = head.next;
    head.next = temp.next
    temp.next = head
    head.next = swapPairs(head.next)
    return temp
};
