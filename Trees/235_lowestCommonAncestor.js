// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Given a binary search tree(BST), find the lowest common ancestor(LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor 
// is defined between two nodes p and q as the lowest node in T that has both p 
// and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]

var lowestCommonAncestor = function (root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root.val;
    }
};


let root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
let p = 2
let q = 8

console.log(lowestCommonAncestor(root, p, q))
// Output: 6