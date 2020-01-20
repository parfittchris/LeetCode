// https://leetcode.com/problems/minimum-window-substring/
// Given a string S and a string T, find the minimum window in S
//  which will contain all the characters in T in complexity O(n).

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
var minWindow = function (s, t) {
    let result = "";
    let start = 0;
    let end = 0;

    let counter = {}

    for (let i = 0; i < t.length; i++) {
        counter[t[i]] = false;
    }

    while (end < s.length) {
        let sub = s.slice(start, end);

        if (counter[s[end]] === false) {
            counter[s[end]] = true;
        }

        if Object.values
    }

};

let S = "ADOBECODEBANC"
let T = "ABC"

console.log(minWindow(S,T));