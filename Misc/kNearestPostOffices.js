function nearestOffices(position, offices, num) {
    let distances = {}
    let result = [];

    for (let i = 0; i < offices.length; i++) {
        let location = [offices[i][0], offices[i][1]];
        distances[i] = findDistance(position, location)
    }


    let sortable = [];

    for (office in distances) {
        sortable.push([office, distances[office]]);
    }

    sortable.sort((a, b) => { return a[1] - b[1] })

    for (let j = 0; j < num; j++) {
        let index = sortable[j][0];
        result.push(offices[index]);
    }

    return result;
}

function findDistance(pos1, pos2) {
    let x = Math.abs(pos1[0] - pos2[0]);
    let y = Math.abs(pos1[1] - pos2[1]);
    return Math.sqrt((x * x) + (y * y));
}




let position = [0, 0];
let offices = [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]];
let k = 3;


console.log(nearestOffices(position, offices, k));
