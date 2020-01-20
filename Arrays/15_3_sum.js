// https://leetcode.com/problems/3sum/

// Given an array nums of n integers, are there elements a, b, c 
// in nums such that a + b + c = 0 ? Find all unique triplets in the 
// array which gives the sum of zero.



const threeSum = function (arr) {
    let result = [];

    const nums = arr.sort((a,b) => {return a-b});
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return result;
        if (i > 0 && nums[i] === nums[i-1]) continue;

        for (let j = i + 1, k = nums.length -1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i],nums[j],nums[k]]);
                k--;
                j++;

                while(nums[j] === nums[j + 1]) j++;
                while(nums[k] === nums[k - 1]) k--;

            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
}




const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));