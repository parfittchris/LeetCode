function maxPath(array) {
    let mins = [];
    console.log(array[5])
    function traverse(position, path) {
        let x = position[0]
        let y = position[1]
        path.push(array[x][y]);

        if (x === array.length - 1 && y === array.length - 1) {
            mins.push(Math.min(...path));
        }

        if (x < array.length - 1) {
            traverse([x + 1, y], path);
        }

        if (y < array[0].length - 1) {
            traverse([x, y + 1], path);
        }

        path.pop();
    }

    traverse([0, 0], []);
    return Math.max(...mins)
}



let array = [[7, 5, 3],
[2, 2, 9],
[4, 5, 9]];

console.log(maxPath(array))