// https://leetcode.com/problems/substring-with-concatenation-of-all-words/
//You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (words.length === 0) return [];

    let indices = [];
    let wordLength = words[0].length;

    for (let idx = 0; idx < s.length; idx++) {
        let j = idx
        let newWords = words.slice(0);

        while (j < s.length) {
            if (newWords.includes(s.slice(j, j + wordLength))) {
                let wordIdx = newWords.indexOf(s.slice(j, j + wordLength))
                newWords.splice(wordIdx, 1);

                if (newWords.length === 0) {
                    indices.push(idx)
                    break
                } else {
                    j += wordLength;
                }

            } else {
                break
            }
        }
    }
    return indices
};