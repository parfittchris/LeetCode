// https://leetcode.com/problems/word-ladder/

// Given two words(beginWord and endWord), and a dictionary's word list, find the 
// length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.Note that beginWord is not a 
// transformed word.


var ladderLength = function (beginWord, endWord, wordList) {
    let minCount = Infinity;
    let seen = {};

    function traverse(start, target, count) {
        if (start === target) {
            minCount = Math.min(count, minCount);
            console.log(seen)
            return;
        }
        seen[start] = true;
        
        for (let i = 0; i < start.length; i++) {
            for (let j = 0; j < 26; j++) {
                const newWord = start.slice(0,i) + String.fromCharCode(97 + j) + start.slice(i+1);
                if (wordList.includes(newWord) && !seen[newWord]) {
                    return traverse(newWord, target, count + 1); 
                }
            }
        }
        
    }


    traverse(beginWord, endWord, 1);
    return minCount = minCount === Infinity ? 0 : minCount;
};



const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

// const wordList = ["hot", "dog", "dot"]

console.log(ladderLength(beginWord, endWord, wordList));