//https://leetcode.com/problems/merge-k-sorted-lists/
// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null
    let vals = [];
    for (let i = 0; i < lists.length; i++) {
        let current = lists[i]
        while (current !== null) {
            vals.push(current.val);
            current = current.next;
        }
    }

    if (vals.length === 0) return null;


    let sorted = vals.sort((a, b) => { return a - b })

    let tempNode = new ListNode(vals.shift());
    let nullNode = new ListNode();
    nullNode.next = tempNode;

    while (vals.length > 0) {
        tempNode.next = new ListNode(vals.shift())
        tempNode = tempNode.next
    }

    return nullNode.next
};