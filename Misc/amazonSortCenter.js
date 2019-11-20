function sortCenter(space, packages) {
    let target = space - 30;
    let remaining = {};
    let pairs = [];

    for (let i = 0; i < packages.length; i++) {
        const balance = target - packages[i];

        if (remaining[balance]) {
            pairs.push([remaining[balance], i]);
        }

        remaining[packages[i]] = i;
    }

    if (pairs.length > 0) {
        let maxVal = 0;
        let maxPair = 0;

        for (let j = 0; j < pairs.length; j++) {
            let val1 = packages[pairs[j][0]];
            let val2 = packages[pairs[j][1]];
            if (val1 > maxVal || val2 > maxVal) maxPair = j;
        }

        return pairs[maxPair];
    }

    return pairs[0];
}


let truckSpace = 90
let packagesSpace = [1, 10, 25, 35, 60]
console.log(sortCenter(truckSpace, packagesSpace))
