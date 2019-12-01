// https://leetcode.com/problems/house-robber/
// You are a professional robber planning to rob houses along a street.Each house 
// has a certain amount of money stashed, the only constraint stopping you from 
// robbing each of them is that adjacent houses have security system connected 
// and it will automatically contact the police if two adjacent houses were broken
//  into on the same night.

// Given a list of non - negative integers representing the amount of money of 
// each house, determine the maximum amount of money you can rob tonight without 
// alerting the police.

var rob = function (nums) {
    if (nums === null || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }

    return dp[nums.length - 1]
};


let array = [1, 2, 3, 1]
// output = 4

console.log(rob(array));