https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let start = 0;
    let end = 0;

    let counters = {}

    while (end < s.length) {
        let sub = s.slice(start, end)
        counters[s[end]] = end;

        if (counters[s[end + 1]]) {
            max = Math.max(sub.length, max);
            start = counters[s[end]];
            end = start;
            counters = {};
        }

        end++
    }
    
    return max;
};

let input = "bbbbb"

console.log(lengthOfLongestSubstring(input))