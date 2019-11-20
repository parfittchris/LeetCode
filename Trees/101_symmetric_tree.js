// https://leetcode.com/problems/symmetric-tree/
// Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).

// For example, this binary tree[1, 2, 2, 3, 4, 4, 3] is symmetric:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;


    function traverse(left, right) {
        if (!left && !right) {
            return true;
        }

        if (!left || !right || left.left !== right.right) {
            return false;
        }

        return (traverse(left.left, right.right) && traverse(left.right, right.left))
    }

    return traverse(root);
};