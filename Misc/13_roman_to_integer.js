// Given a roman numeral, convert it to an integer.Input is
//  guaranteed to be within the range from 1 to 3999.

var romanToInt = function (s) {
   const ROMANS = {
       'I': 1,
       'IV': 4,
       'V': 5,
       'IX': 9,
       'X': 10,
       'XL': 40,
       'L': 50,
       'XC': 90,
       'C': 100,
       'CD': 400,
       'D': 500,
       'CM': 900,
       'M': 1000
   }

   let sum = 0;

   for (let i = 0; i < s.length; i++) {
       if (i === s.length - 1) {
           sum += ROMANS[s[i]];
           break;
       }

       const combine = s[i] + s[i + 1];
       if (ROMANS[combine]) {
           sum += ROMANS[combine];
           i++
       } else {
           sum += ROMANS[s[i]];
       }
   }

   return sum;
};

const input = 'III';

console.log(romanToInt(input))