// https://leetcode.com/problems/word-search/



var exist = function (board, word) {
    let starts = [];
    let seen = {};
    let found = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) starts.push([i,j]);
        }
    }

    function search(grid, position, term) {
        if (term.length === 1)  {
            found = true;
            return;
        }
        
        seen[position] = true;

        const adjacents = [[1,0], [-1,0], [0,1], [0,-1]];

        for (let k = 0; k < adjacents.length; k++) {
            const x = position[0] + adjacents[k][0];
            const y = position[1] + adjacents[k][1];
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
                if (grid[x][y] === term[1] && !seen[[x,y]]) {
                    search(grid, [x,y], term.slice(1));
                }
            }
        }
        seen[position] = false;
    }

    for (let m = 0; m < starts.length; m++) {
        search(board, starts[m], word);
    }

    return found;
};


const board =
    [
        ["C", "A", "A"], 
        ["A", "A", "A"], 
        ["B", "C", "D"]
    ]

const word = 'DAAAT'



console.log(exist(board, word))