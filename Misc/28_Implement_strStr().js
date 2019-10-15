//https://leetcode.com/problems/implement-strstr/
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return null;
    let idx = 0;

    while (idx < haystack.length) {
        if (haystack.slice(idx, idx + needle.length) === needle) {
            return idx;
        } else {
            idx++
        }
    }

    return -1
};