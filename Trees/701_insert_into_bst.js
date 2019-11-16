// // https://leetcode.com/problems/insert-into-a-binary-search-tree/submissions/
// Given the root node of a binary search tree(BST) and a value to be inserted into the tree, insert the value into the BST.Return the root node of the BST after the insertion.It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion.You can return any of them.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

    if (!root.left && val < root.val) {
        root.left = new TreeNode(val)
    } else if (!root.right && val >= root.val) {
        root.right = new TreeNode(val)
    } else if (val < root.val) {
        insertIntoBST(root.left, val)
    } else {
        insertIntoBST(root.right, val)
    }

    return root
};