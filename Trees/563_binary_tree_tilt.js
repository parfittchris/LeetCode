// https://leetcode.com/problems/binary-tree-tilt/
// Given a binary tree, return the tilt of the whole tree.

// The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values.Null node has tilt 0.

// The tilt of the whole tree is defined as the sum of all nodes' tilt.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let tilt = 0;

    function traverse(node) {
        if (node === null) return 0;

        let left = traverse(node.left);
        let right = traverse(node.right);

        tilt += Math.abs(left - right);
        return node.val + left + right
    }
};
