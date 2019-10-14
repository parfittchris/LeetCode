//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in -place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.


var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums;
    let idx = 0;
    while (idx < nums.length - 1) {
        if (nums[idx] === nums[idx + 1]) {
            nums.splice(idx, 1);
        } else {
            idx++;
        }
    }

    return nums.length
};
