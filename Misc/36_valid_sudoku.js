// https://leetcode.com/problems/valid-sudoku/
var isValidSudoku = function (board) {
    let rows = new Array(9).fill().map(el => ({}));
    let cols = new Array(9).fill().map(el => ({}));
    let squares = new Array(9).fill().map(el => ({}));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let element = board[i][j];

            if (element !== '.') {
                const k = Math.floor(j / 3) + Math.floor(i / 3) * 3;

                if (rows[i][element] || cols[j][element] || squares[k][element]) {
                    return false;
                }

                rows[i][element] = cols[j][element] = squares[k][element] = true;
            }
        }
    }
    
    return true;
}


const input = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(isValidSudoku(input));

