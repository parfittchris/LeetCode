// https://leetcode.com/problems/binary-tree-paths/submissions/

// Given a binary tree, return all root - to - leaf paths.

//     Note: A leaf is a node with no children.

var treePaths = function (root) {

    let allPaths = [];

    function traverse(node, path) {
        if (node === null) {
            return;
        }

        path.push(node.val);

        if (!node.left && !node.right) {
            allPaths.push(path.join("->"));
        } else {
            traverse(node.left, path);
            traverse(node.right, path);
        }

        path.pop();
    }

    traverse(root, [])
    return allPaths
};


console.log(treePaths(root))

