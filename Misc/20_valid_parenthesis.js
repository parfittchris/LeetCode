// https://leetcode.com/problems/valid-parentheses/

// Given a string containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (!compare(stack.pop(), s[i])) return false;
        }
        if (i === s.length -1 && stack.length > 0) return false;
    }

    return true;
};

var compare = function(str1, str2) {
    if (str1 === undefined || str2 === undefined) return false;
    if (str1 === '[' && str2 !== ']') return false;
    if (str1 === '{' && str2 !== '}') return false;
    if (str1 === '(' && str2 !== ')') return false;
    return true;
}

const input = "]";

console.log(isValid(input));