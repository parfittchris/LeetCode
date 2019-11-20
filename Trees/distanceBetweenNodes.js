class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function distance(root, node1, node2) {
    let ancestor = commonAncestor(root, node1, node2);

    let dist1 = findDistance(ancestor, node1);
    let dist2 = findDistance(ancestor, node2);

    return dist1 + dist2;
}

function findDistance(root, node) {
    if (!root) return 0;
    let totalDistance = 0;
    function traverse(node, distance, target) {
        if (node.val === target) {
            totalDistance = distance;
            return;
        }

        if (node.left) {
            traverse(node.left, distance + 1, target)
        }

        if (node.left) {
            traverse(node.right, distance + 1, target)
        }
    }
    traverse(root, 0, node.val);
    return totalDistance;
}

function commonAncestor(root, node1, node2) {
    if (node1.val < root.val && node2.val < root.val) {
        return commonAncestor(root.left, node1, node2);
    } else if (node1.val > root.val && node2.val > root.val) {
        return commonAncestor(root.right, node1, node2);
    } else {
        return root;
    }
}


const root = new Node(5);
root.left = new Node(4);
root.right = new Node(6);
root.left.left = new Node(3);
root.left.right = new Node(4.5);
root.right.left = new Node(5.5);
root.right.right = new Node(7);

let p = root.left.left;
let q = root.right;

console.log(distance(root, p, q))