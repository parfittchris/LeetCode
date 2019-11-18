function zombies(array) {
    let days = 0;
    let queue = [];


    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }

    let currentZombies = queue.length;
    let nextZombies = 0;

    if (currentZombies === 0) return -1;

    while (queue.length) {
        let position = queue.shift();
        infect(position);
        currentZombies--

        if (currentZombies === 0) {
            if (nextZombies === 0) break;
            currentZombies = nextZombies;
            nextZombies = 0;
            days++
        }
    }


    function infect(position) {
        let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
        for (let i = 0; i < directions.length; i++) {
            let x = position[0] + directions[i][0];
            let y = position[1] + directions[i][1];

            if (x >= 0 && y >= 0 && x < array.length && y < array[0].length) {
                let newPos = [x, y];
                if (array[x][y] === 0) {
                    array[x][y] = 1;
                    queue.push(newPos);
                    nextZombies++;
                }
            }
        }
    }
    return days;
}

let array = [[0, 1, 1, 0, 1],
[0, 1, 0, 1, 0],
[0, 0, 0, 0, 1],
[0, 1, 0, 0, 0]]

let array2 = [[0, 0], [0, 0]]
console.log(zombies(array))