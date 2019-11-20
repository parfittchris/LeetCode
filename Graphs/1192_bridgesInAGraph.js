// https://leetcode.com/problems/critical-connections-in-a-network/
// There are n servers numbered from 0 to n - 1 connected by undirected
// server - to - server connections forming a network where connections[i] = [a, b]
//  represents a connection between servers a and b.Any server can reach any other 
//  server directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some server
//  unable to reach some other server.

// Return all critical connections in the network in any order.


// Solution exceeds time limit on leetcode
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
    let results = [];

    for (let j = 0; j < connections.length; j++) {
        let newConnections = [];

        for (let k = 0; k < connections.length; k++) {
            if (k !== j) {
                newConnections.push(connections[k]);
            }
        }

        if (graphBFS(n, newConnections) === false) {
            results.push(connections[j]);
        }
    }
    return results;
};

let graphBFS = function (n, connections) {
    let graph = {};
    let visited = {};
    let complete = true;

    for (let i = 0; i < n; i++) {
        graph[i] = { val: i, children: [] };
    }

    connections.forEach(connection => {
        graph[connection[0]].children.push(connection[1])
        graph[connection[1]].children.push(connection[0])
    });

    for (let i = 0; i < n; i++) {
        visited[i] = false;
    }

    let queue = [graph[0]];

    while (queue.length) {
        let node = queue.shift();
        visited[node.val] = true;

        node.children.forEach(child => {
            if (visited[child] === false) {
                queue.push(graph[child])
            };
        });
    }

    Object.values(visited).forEach(value => {
        if (value === false) complete = false;
    });

    return complete;
}

let n = 4
let connections = [[0, 1], [1, 2], [2, 0], [1, 3]]
// Output: [[1, 3]]

console.log(criticalConnections(n, connections))