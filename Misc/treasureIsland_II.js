function treasure(array) {
    let starts = [];
    let steps = {};

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === 'S') starts.push([i, j]);
        }
    }

    function find(start) {
        let queue = [start]
        let moves = 0;
        let visited = {};
        let found = false;
        let currentNodes = 1;
        let nextNodes = 0;

        while (queue.length) {

            let position = queue.shift();
            let x = position[0]
            let y = position[1]
            visited[position] = true;

            if (array[x][y] === 'X') {
                found = true;
                break;
            }

            findNeighbors(position, array);
            currentNodes--
            if (currentNodes === 0) {
                currentNodes = nextNodes;
                nextNodes = 0;
                moves++
            }
        }

        function findNeighbors(position, array) {
            let directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];

            for (let i = 0; i < 4; i++) {
                let x = position[0] + directions[i][0];
                let y = position[1] + directions[i][1];

                if (x < array.length && y < array.length && x >= 0 && y >= 0) {
                    if (array[x][y] !== 'D' && visited[[x, y]] !== true) {
                        queue.push([x, y])
                        nextNodes++;
                    }
                }
            }
        }

        if (found === true) {
            return moves;
        } else {
            return -1;
        }
    }

    for (let k = 0; k < starts.length; k++) {
        steps[k] = find(starts[k]);
    }

    return Math.min(...Object.values(steps))
}





let array = [['S', 'O', 'O', 'S', 'S'],
['D', 'O', 'D', 'O', 'D'],
['O', 'O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O', 'O'],
['X', 'D', 'D', 'D', 'O']]

console.log(treasure(array))