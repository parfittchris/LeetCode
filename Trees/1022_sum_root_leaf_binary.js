// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
// Given a binary tree, each node has value 0 or 1.  Each root - to - leaf path represents a binary number starting with the most significant bit.For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers.




//   Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

var sumRootToLeaf = function (root) {
    let sum = 0;

    function traverse(node, path) {
        if (node === null) {
            return;
        }

        path.push(node.val);

        if (!node.left && !node.right) {
            sum += parseInt(path.join(""), 2);

        } else {
            traverse(node.left, path);
            traverse(node.right, path);
        }

        path.pop();

    }

    traverse(root, [])
    return sum;
};


let root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);

console.log(sumRootToLeaf(root))

