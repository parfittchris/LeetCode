function connections(array) {
    let bridges = [];

    function traverse(array) {
        let visited = {};
        let graph = {};
        let queue = [array[0]];

        for (let i = 0; i < array.length; i++) {
            let u = array[i][0];
            let v = array[i][1];

            if (!graph[v]) {
                graph[v] = [u];
            } else {
                graph[v].push(u);
            }

            if (!graph[u]) {
                graph[u] = [v];
            } else {
                graph[u].push(v);
            }

            while (queue.length) {
                let node = queue.shift();
                visited[node] = true;


            }
        }
        console.log(graph)
    }

    traverse(array.slice(0, 3))
}


const array = [[1, 2], [1, 3], [3, 2], [3, 4]];
console.log(connections(array));