// https://leetcode.com/problems/integer-to-roman/

// Given an integer, convert it to a roman numeral.Input 
// is guaranteed to be within the range from 1 to 3999.

var intToRoman = function (num) {
   const DIGITS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   const ROMANS = ['M', 'CM','D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

   let result = '';

   while (num > 0) {
      for (let i = 0; i < DIGITS.length; i++) {
         if (num >= DIGITS[i]) {
            result += ROMANS[i];
            num -= DIGITS[i];
            break;
         }
      }
   }

   return result;
};



const input = 58
console.log(intToRoman(input));