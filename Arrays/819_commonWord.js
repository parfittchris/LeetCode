// https://leetcode.com/problems/most-common-word/

// Given a paragraph and a list of banned words, return the most frequent word
//  that is not in the list of banned words.It is guaranteed there is at least
//  one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of 
// punctuation.Words in the paragraph are not case sensitive.The answer is in lowercase.


var mostCommonWord = function (paragraph, banned) {
    let counter = {}
    let split = paragraph.split(/\W+/).map(ele => { return ele.toLowerCase() });

    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        if (word.length === 0) continue;
        if (!banned.includes(word)) {
            if (!counter[word]) {
                counter[word] = 1;
            } else {
                counter[word]++
            }
        }
    }
    let maxValue = Math.max(...Object.values(counter));
    let results = [];
    for (let i = 0; i < Object.values(counter).length; i++) {
        if (Object.values(counter)[i] === maxValue) {
            results.push(Object.keys(counter)[i]);
        }
    }

    if (results.length > 1) {
        return results;
    } else {
        return results[0];
    }
};


let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];

console.log(mostCommonWord(paragraph, banned))
// console.log(mostCommonWord('Bob', []))
