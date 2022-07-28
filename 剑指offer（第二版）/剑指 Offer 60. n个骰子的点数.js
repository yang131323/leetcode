/**
 * sixty: 剑指 Offer 60. n个骰子的点数
 * 解题思路：
 * 1. 动态规划
 */

/**
 * 1. 动态规划
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {
    let res = Array(6);
    let rate = 1 / 6;
    res.fill(rate);
    for (let i = 2; i <= n; i++) {
        let dp = Array(5 * i + 1);
        dp.fill(0);
        for (let j = 0; j < res.length; j++) {
            for (let k = 0; k < 6; k++) {
                dp[j + k] += res[j] * rate;
            }
        }
        res = dp;
    }
    return res;
};