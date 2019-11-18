// https://leetcode.com/problems/coin-change-2/

// You are given coins of different denominations and a total amount of money.
// Write a function to compute the number of combinations that make up 
// that amount.You may assume that you have infinite number of each kind of coin.

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                dp[j] += dp[j - coins[i]];
            }
        }
    }

    return dp[amount];
};


let amount = 5
let coins = [1, 2, 5]

console.log(change(amount, coins))