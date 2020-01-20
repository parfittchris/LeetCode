// https://leetcode.com/problems/container-with-most-water/
// Given n non - negative integers a1, a2, ..., an, where each represents a 
// point at coordinate(i, ai).n vertical lines are drawn such that the two 
// endpoints of line i is at(i, ai) and(i, 0).Find two lines, which together 
// with x - axis forms a container, such that the container contains the most water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        let area = Math.min(height[start], height[end]) * (end - start);
        max = Math.max(max, area);

        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }

    return max;
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(input));
