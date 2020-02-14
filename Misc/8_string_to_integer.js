// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until 
// the first non - whitespace character is found.Then, starting from this character,
//  takes an optional initial plus or minus sign followed by as many numerical 
//  digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral
//  number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non - whitespace characters in str is not a valid 
// integral number, or if no such sequence exists because either str is empty or 
// it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

//     Note:

// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers 
// within the 32 - bit signed integer range: [−231, 231 − 1].If the numerical 
// value is out of the range of representable values, 
// INT_MAX(231 − 1) or INT_MIN(−231) is returned.


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trimStart();
    let sign = 1;
    let number = 0;
    let counter = 0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if (str.length >= 1 && isNaN(str[0])) {
        if (str[0] == '-') {
            counter = 1;
            sign = -1;
        } else if (str[0] == '+') {
            counter = 1;
        }
    }

    for (let i = counter; i < str.length; i++) {
        if (str[i] !== ' ' && !isNaN(str[i])) {
            number += str[i];
        } else if (isNaN(str[i]) && !number) {
            return 0;
        } else {
            break;
        }
    }

    if (number * sign > INT_MAX)
        return INT_MAX;
    else if (number * sign < INT_MIN)
        return INT_MIN;
    else
        return number * sign;
};

const input = "4193 with words";
const input2 = "42"
const input3 = "-42";
const input4 = "words and 987";

const input5 = "   -42"

console.log(myAtoi(input));
console.log(myAtoi(input2));
console.log(myAtoi(input3));
console.log(myAtoi(input4));
console.log(myAtoi(input5));

