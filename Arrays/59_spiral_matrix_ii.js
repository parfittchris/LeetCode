// https://leetcode.com/problems/spiral-matrix-ii/
// Given a positive integer n, generate a square matrix
//  filled with elements from 1 to n2 in spiral order.

// /**
//  * @param {number} n
//  * @return {number[][]}
//  */


var generateMatrix = function (n) {
    let grid = Array(n).fill(0).map(() => { return Array(n).fill(0) })
    let count = 1;

    for (let i = 0; i < n; i++) {
        // Left to right
        for (let j = i; j < n - 1 - i; j++) {
            grid[i][j] = count;
            count++;
        }
        // Top to Bottom
        for (let j = i; j < n - 1 - i; j++) {
            grid[j][n - 1 - i] = count;
            count++;
        }
        // Right to Left
        for (let j = n - 1 - i; j >= i; j--) {
            grid[n - 1 - i][j] = count;
            count++;
        }
        // Bottom to Top
        for (let j = n - 2 - i; j > i; j--) {
            grid[j][i] = count;
            count++;
        }
    }


    return grid;

};


console.log(generateMatrix(5))