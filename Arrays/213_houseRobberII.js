// https://leetcode.com/problems/house-robber-ii/

// You are a professional robber planning to rob houses along a street.Each house 
// has a certain amount of money stashed.All houses at this place are arranged in 
// a circle.That means the first house is the neighbor of the last one.Meanwhile,
//  adjacent houses have security system connected and it will automatically 
//  contact the police if two adjacent houses were broken into on the same night.

// Given a list of non - negative integers representing the amount of money of
//  each house, determine the maximum amount of money you can rob tonight without 
//  alerting the police.

var rob = function (nums) {
    if (nums === null || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    function robHouses(array) {
        let dp = new Array(array.length);

        dp[0] = array[0];
        dp[1] = Math.max(array[0], array[1]);

        for (let i = 2; i < array.length; i++) {
            dp[i] = Math.max(array[i] + dp[i - 2], dp[i - 1]);
        }

        return dp[array.length - 1];
    }

    return Math.max(robHouses(nums.slice(0, nums.length - 1)), robHouses(nums.slice(1, nums.length)));
};

let input = [1, 2, 3, 1];
// Output: 3
console.log(rob(input))