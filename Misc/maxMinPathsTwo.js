function maxPath(array) {
    let visited = {};
    let mins = [];

    function traverse(position, path) {
        let x = position[0];
        let y = position[1];
        path.push(array[x][y]);
        visited[position] = true;
        if (x === array.length - 1 && y === array.length - 1) {
            mins.push(Math.min(...path));
        }

        let nextNodes = findNextNodes(position);

        if (nextNodes.length) {
            for (let i = 0; i < nextNodes.length; i++) {
                traverse(nextNodes[i], path);
            }
        }
        path.pop();
        visited[position] = false;
    }

    function findNextNodes(position) {
        let newNodes = [];
        let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];

        for (let i = 0; i < directions.length; i++) {
            let x = position[0] + directions[i][0];
            let y = position[1] + directions[i][1];

            if (x >= 0 && x < array.length && y >= 0 && y < array.length) {
                let newPos = [x, y]
                if (!visited[newPos] || visited[newPos] === false) {
                    newNodes.push(newPos);
                }
            }
        }

        return newNodes;
    }

    traverse([0, 0], []);
    return Math.max(...mins)
}




let array = [[7, 5, 3],
[2, 2, 9],
[4, 5, 9]];

console.log(maxPath(array))
