//https://leetcode.com/problems/container-with-most-water/submissions/
//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let head = 0;
    let tail = height.length - 1

    while (tail - head > 0) {
        let area = (tail - head) * Math.min(height[head], height[tail])
        maxArea = Math.max(area, maxArea)

        if (height[tail] > height[head]) {
            head++
        } else {
            tail--
        }
    }

    return maxArea
};