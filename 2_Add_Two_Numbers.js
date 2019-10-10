
// https://leetcode.com/problems/add-two-numbers/

// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode();
    let list = head;
    let carry = false;
    let sum = 0;

    while (l1 !== null || l2 !== null || carry === true) {
        if (carry === true) {
            sum = 1;
            carry = false;
        }

        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        if (sum >= 10) {
            carry = true;
            sum -= 10;
        }

        list.next = new ListNode(sum)
        list = list.next
        sum = 0
    }


    return head.next
};