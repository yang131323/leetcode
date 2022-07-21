/**
 * ten-two: 剑指 Offer 10- II. 青蛙跳台阶问题
 * 解题思路（跳台阶 + 大数问题：实际上就是斐波那契数列）：
 * 1. 动态规划
 */

const max = 1e9 + 7;

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let a = 1, b = 1, result = a + b;
    for (let i = 2; i <= n; i++) {
        result = (a + b) % max;
        [a, b] = [b, result];
    }
    return b;
};