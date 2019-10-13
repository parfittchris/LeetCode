//https://leetcode.com/problems/longest-substring-without-repeating-characters/

//Given a string, find the length of the longest substring without repeating characters.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let max = 0;
    let temp = [];
    let begin = 0;

    for (let i = 0; i < s.length; i++) {
        let charIdx = temp.indexOf(s[i]);

        if (charIdx === -1) {
            temp.push(s[i])
        } else {
            max = Math.max(max, temp.length)
            i = begin + charIdx
            begin = i + 1
            temp = [s[i]]
        }
    }


    return Math.max(temp.length, max)
};