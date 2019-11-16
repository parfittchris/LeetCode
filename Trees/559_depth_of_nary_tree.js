// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Given a n - ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example, given a 3 - ary tree:
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;

    function traverse(node) {
        if (node.children.length === 0) {
            return 0;
        }

        let allChildren = node.children.map(child => {
            return 1 + traverse(child)
        });

        console.log(allChildren)
        return Math.max(...allChildren);
    }

    return traverse(root) + 1
};

let node = { "$id": "1", "children": [{ "$id": "2", "children": [{ "$id": "5", "children": [], "val": 5 }, { "$id": "6", "children": [], "val": 6 }], "val": 3 }, { "$id": "3", "children": [], "val": 2 }, { "$id": "4", "children": [], "val": 4 }], "val": 1 }

console.log(maxDepth(node))