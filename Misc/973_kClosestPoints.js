// https://leetcode.com/problems/k-closest-points-to-origin/
// We have a list of points on the plane.Find the K closest points to the origin(0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.The answer is guaranteed to be unique(except for the order that it is in.)
// /**
//  * @param {number[][]} points
//  * @param {number} K
//  * @return {number[][]}
//  */


var kClosest = function (points, K) {
    let distances = {};
    let result = [];

    for (let i = 0; i < points.length; i++) {
        distances[i] = findDistance(points[i]);
    }

    let sorted = [];
    for (point in distances) {
        sorted.push([point, distances[point]]);
    }
    sorted.sort((a, b) => { return a[1] - b[1] });

    for (let j = 0; j < K; j++) {
        let idx = sorted[j][0];
        result.push(points[idx]);
    }

    return result;

};

function findDistance(point) {
    let x = point[0];
    let y = point[1];

    return (Math.sqrt((x * x) + (y * y)));
}

let points = [[3, 3], [5, -1], [-2, 4]]
let K = 2

console.log(kClosest(points, K))