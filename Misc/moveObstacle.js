function findObstacle(grid, start) {
    if (grid[start[0]][start[1]] === 0) return -1;
    let visited = {};
    let len = null;

    function traverse(position, path) {
        let x = position[0];
        let y = position[1];
        if (grid[x][y] === 9) {
            len = path.length;
            return;
        }
        path.push(position);
        visited[position] = true;

        let nextNodes = nextSteps(position);
        nextNodes.forEach(node => traverse(node, path));
        path.pop()
    }


    function nextSteps(position) {
        let result = [];
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (let i = 0; i < directions.length; i++) {
            let x = position[0] + directions[i][0];
            let y = position[1] + directions[i][1];

            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
                let newPos = [x, y];

                if (grid[x][y] !== 0 && !visited[newPos] === true) {
                    result.push(newPos);
                }
            }
        }
        return result;
    };

    traverse(start, []);

    return len !== null ? len : -1;
};







const lot = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]]

console.log(findObstacle(lot, [0, 0]))