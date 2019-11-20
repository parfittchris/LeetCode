function prisonCells(grid, days) {
    days = days % 14 === 0 ? 14 : days % 14;

    for (let i = 1; i <= days; i++) {
        let temp = Array(grid.length).fill(0);

        for (let j = 1; j < temp.length - 1; j++) {
            temp[j] = grid[j - 1] === grid[j + 1] ? 1 : 0;
        }

        grid = temp;
        grid[0] = 0;
        grid[grid.length - 1] = 0;
    }

    return grid;
}


let cells = [1, 0, 0, 1, 0, 0, 1, 0]
let N = 1000000000
console.log(prisonCells(cells, N));