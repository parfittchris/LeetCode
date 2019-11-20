// https://leetcode.com/problems/course-schedule-ii/


// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0, 1]

// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

// There may be multiple correct orders, you just need to return one of them.If it is impossible to finish all courses, return an empty array.

function classFind(numCourses, prereqs) {
    if (prereqs.length === 0) {
        let result = [];

        for (let i = 0; i < numCourses; i++) {

            result.push(i);
        }

        return result;
    }

    let result = [];
    let queue = [];
    let graph = new Map();
    let courses = new Array(numCourses).fill(0);

    for (let i = 0; i < prereqs.length; i++) {
        courses[prereqs[i][0]]++

        let key = prereqs[i][1];

        if (graph.has(key)) {
            graph.set(key, graph.get(key).concat(prereqs[i][0]));
        } else {
            graph.set(key, [prereqs[i][0]]);
        }
    }

    courses.forEach(course => {
        if (course === 0) {
            queue.push(course);
            result.push(course)
        }
    });


    while (queue.length) {
        let current = queue.shift();
        let allCourses = graph.get(current);
        for (let i = 0; allCourses && i < allCourses.length; i++) {
            if (--courses[allCourses[i]] === 0) {
                queue.push(allCourses[i]);
                result.push(allCourses[i])
            }
        }
    }

    if (result.length === numCourses) {
        return result;
    } else {
        return [];
    }
}

let array = [[0, 1]];
// let array = [];
// let array = [[1, 0], [2, 6], [1, 7], [6, 4], [7, 0], [0, 5]]
console.log(classFind(2, array))
