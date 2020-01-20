// https://leetcode.com/problems/3sum-closest/



// Given an array nums of n integers and an integer target, find three integers
//  in nums such that the sum is closest to target.Return the sum of the three 
//  integers.You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = Infinity;
    nums = nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1, k = nums.length - 1; j < k;) {

            let sum = nums[i] + nums[j] + nums[k];
            console.log(result)
            if (Math.abs(target-result) > Math.abs(target - sum)) {
                result = sum;
            }
            
            if (target > sum) {
                j++
            } else {
                k--
            }
        }
    }

    return result;
};

const nums = [-1, 2, 1, -4];
console.log(threeSumClosest(nums, 1))