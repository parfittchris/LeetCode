// https://leetcode.com/problems/balanced-binary-tree/
// Given a binary tree, determine if it is height - balanced.

// For this problem, a height - balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.


function balancedTree(root) {
    if (!root) return null;

    function traverse(node) {
        if (!node) return 0;

        let left = traverse(node.left);
        let right = traverse(node.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1
        }

        return Math.max(left, right) + 1
    }

    return traverse(root) !== -1;
}