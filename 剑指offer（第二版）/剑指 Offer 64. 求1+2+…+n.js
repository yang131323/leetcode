/**
 * sixty four: 剑指 Offer 64. 求1+2+…+n
 * 解题思路：
 * 题意：等差数列（n * (n - 1) * 0.5） + 各种限制
 * 1. 递归
 */

/**
 * 1. 递归
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n && (n + sumNums(n - 1))
};