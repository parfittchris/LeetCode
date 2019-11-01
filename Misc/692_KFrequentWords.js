// https://leetcode.com/problems/top-k-frequent-words/
// Given a non - empty list of words, return the k most frequent elements.
// Your answer should be sorted by frequency from highest to lowest.If two words have the same frequency, then the word with the lower alphabetical order comes first.


let test = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2
var topKFrequent = function (words, k) {
    let count = {};

    words.forEach(word => {
        if (!count[word]) {
            count[word] = 1
        } else {
            count[word] += 1
        }
    });

    let keys = Object.keys(count);

    keys.sort((a, b) => {
        return count[a] - count[b]
    }).reverse()

};

console.log(topKFrequent(test, k));