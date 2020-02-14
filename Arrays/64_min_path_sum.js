
// https://leetcode.com/problems/minimum-path-sum/

// Given a m x n grid filled with non - negative numbers, find a path from 
// top left to bottom right which minimizes the sum of all numbers along its path.


// DFS
var minPathSum = function (grid) {
    let minPath = Infinity;

    let seen = {};

    function traverse(board, x, y, length) {
        console.log([x,y])
        let value = board[x][y];

        if (x === board.length -1 && y === board[0].length-1) {
            minPath = Math.min(minPath, length + value);
            return
        }

        seen[[x,y]] = true;

        let positions = [[0, 1], [0,-1], [1,0], [-1,0]];

        for (let i = 0; i < positions.length; i++) {
            const newX = x + positions[i][0];
            const newY = y + positions[i][1];

            if (newX >= 0 && newX < board.length && newY >= 0 && newY < grid[0].length) {
                if (!seen[[newX,newY]]) {
                    traverse(board, newX, newY, length + value);
                }
            }
        }

        seen[[x,y]] = false;
    }
    
    traverse(grid, 0, 0, 0);
    return minPath;
};


// DP
function dpPath(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) continue;

            if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            } else {
                grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j]);
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1]
}

const input = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

console.log(dpPath(input));