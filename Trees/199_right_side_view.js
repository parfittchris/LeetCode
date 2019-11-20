// https://leetcode.com/problems/binary-tree-right-side-view/

// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

//   Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    let queue = [root];
    // let nodes = [];

    let nodes = [6, 1, null, null, 3, 2, 5, null, null, 4]

    let tiers = {};
    let tierNumber = 1;

    while (queue.length) {
        let node = queue.shift();
        if (node === null) {
            nodes.push(null);
            continue;
        }

        nodes.push(node.val)

        if (node.left) {
            queue.push(node.left)
        } else {
            if (node.left || node.right) {
                queue.push(null)
            }
        }

        if (node.right) {
            queue.push(node.right)
        } else {
            if (node.left || node.right) {
                queue.push(null)
            }
        }
    }

    while (nodes.length) {
        temp = [];
        while (temp.length < tierNumber && nodes.length !== 0) {
            temp.push(nodes.shift());
        }
        tiers[tierNumber] = temp;
        tierNumber *= 2;
    }

    let rightView = [];
    let values = Object.values(tiers)

    for (let i = 0; i < values.length; i++) {
        for (let j = values[i].length - 1; j >= 0; j--) {
            if (values[i][j] !== null) {
                rightView.push(values[i][j])
                break;
            }
        }
    }
    console.log(tiers)

    return rightView;
};



let root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.left.left = new TreeNode(1);
console.log(rightSideView(root))
