//https://leetcode.com/problems/valid-sudoku/

// Determine if a 9x9 Sudoku board is valid.Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1 - 9 without repetition.
// Each column must contain the digits 1 - 9 without repetition.
// Each of the 9 3x3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let row = 0; row < board.length; row++) {
        let temp = [];
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === '.') continue
            if (temp.indexOf(board[row][col]) !== -1) return false;
            temp.push(board[row][col]);
        }
    }

    for (let col = 0; col < board[0].length; col++) {
        let temp = [];
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] === '.') continue
            if (temp.indexOf(board[row][col]) !== -1) return false;
            temp.push(board[row][col]);
        }
    }

    let i = 0;
    while (i < 3) {
        let j = 0;
        while (j < 3) {
            temp = []
            for (let row = i * 3; row < i * 3 + 3; row++) {
                for (let col = j * 3; col < j * 3 + 3; col++) {
                    if (board[row][col] === '.') continue
                    if (temp.indexOf(board[row][col]) !== -1) return false;
                    temp.push(board[row][col])
                }
            }
            j++
        }
        i++

    }
    return true;
};