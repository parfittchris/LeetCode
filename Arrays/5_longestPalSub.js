// https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, find the longest palindromic substring in s.You may assume
//  that the maximum length of s is 1000.


var longestPalindrome = function (s) {
    if (s.length <= 1) return s;
    let subs = {};

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let word = s.substring(i, j + 1)
            if (isPal(word) === true) subs[word] = word.length;
        }
    }

    let max = Math.max(...Object.values(subs));
    let result = [];

    Object.keys(subs).forEach(ele => {
        if (ele.length === max) {
            result.push(ele);
        }
    });

    return result[0];
};

let isPal = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        } else {
            i++;
            j--
        }
    };

    return true;
}
let s = "babad";
// Output: "bab"

console.log(longestPalindrome('bb'))
