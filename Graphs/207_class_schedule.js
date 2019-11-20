// https://leetcode.com/problems/course-schedule/

// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0, 1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses ?



//TIME LIMIT EXCEEDED ANSWER

var canFinish = function (numCourses, prerequisites) {
    let courses = new Array(numCourses).fill(0);
    let graph = new Map();
    let queue = [];

    for (let i = 0; i < prerequisites.length; i++) {
        courses[prerequisites[i][0]]++;
        let key = prerequisites[i][1];

        if (graph.has(key)) {
            graph.set(key, graph.get(key).concat(prerequisites[i][0]));
        } else {
            graph.set(key, [prerequisites[i][0]]);
        }
    }

    courses.forEach((course, index) => {
        if (course === 0) queue.push(index);
    });

    while (queue.length > 0) {
        let cur = queue.shift();
        let allCourses = graph.get(cur);

        for (let i = 0; allCourses && i < allCourses.length; i++) {
            if (--courses[allCourses[i]] === 0) queue.push(allCourses[i]);
        }
    }

    for (let i = 0; i < courses.length; i++) {
        if (courses[i] !== 0) return false;
    }

    return true;
};

// let array = [[1, 0]]
// let array = [[1, 0], [0, 1]]
// let array = [[1, 0], [1, 2], [0, 1]]
let array = [[1, 0], [2, 6], [1, 7], [6, 4], [7, 0], [0, 5]]
console.log(canFinish(3, array))
