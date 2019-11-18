// https://leetcode.com/problems/coin-change/

// You are given coins of different denominations and a total amount of money 
// amount.Write a function to compute the fewest number of coins that you need to 
// make up that amount.If that amount of money cannot be made up by any combination
//  of the coins, return -1.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j >= coins[i]) {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};



const coins = [1, 2, 5]
const amount = 11

console.log(coinChange(coins, amount))