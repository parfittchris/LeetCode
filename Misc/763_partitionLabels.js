// https://leetcode.com/problems/partition-labels/
// A string S of lowercase letters is given.We want to partition this 
// string into as many parts as possible so that each letter appears in at 
// most one part, and return a list of integers representing the size of these parts.

function partition(string) {
    let lastIdx = {};
    let result = [];
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        lastIdx[letter] = i;
    }

    let begin = 0;
    let char = string[0];
    let end = lastIdx[char]

    while (begin < string.length) {
        for (let j = begin; j < end; j++) {
            let currentChar = string[j];
            let lastCharIdx = lastIdx[currentChar];
            end = Math.max(end, lastCharIdx);
        }

        result.push(end - begin + 1);

        begin = end + 1;
        char = string[begin];
        end = lastIdx[char];
    }
    return result;
}


let str = "ababcbacadefegdehijhklij";
console.log(partition(str));

// Output: [9, 7, 8]
// "ababcbaca", "defegde", "hijhklij".