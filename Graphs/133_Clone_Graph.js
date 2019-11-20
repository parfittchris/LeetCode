
//https://leetcode.com/problems/clone-graph/
//Given a reference of a node in a connected undirected graph, return a deep copy(clone) of the graph.Each node in the graph contains a val(int) and a list(List[Node]) of its neighbors.

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    let visited = {};
    return traverse(node)

    function traverse(node) {
        if (!node) return

        if (!visited[node.val]) {
            visited[node.val] = new Node(node.val)
            visited[node.val].neighbors = node.val.neighbors.map(neighbor => traverse(neighbor))
        }

        return visited[node.val]
    }


};