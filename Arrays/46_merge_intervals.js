// https://leetcode.com/problems/merge-intervals/
// Given a collection of intervals, merge all overlapping intervals.

var merge = function (intervals) {
    intervals = intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });

    let results = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let nextValue = intervals[i];

        if (nextValue[0] <= current[1]) {
            current = [current[0], Math.max(current[1], nextValue[1])];
        } else {
            results.push(current);
            current = nextValue;
        }
    }
    
    results.push(current)
    return results;
};


const input = [[2, 3], [0, 1], [1, 2], [3, 4], [4, 5], [1, 1], [0, 1], [4, 6], [5, 7], [1, 1], [3, 5]] //[0,7]
console.log(merge(input))