/**
 * ten：剑指 Offer 10- I. 斐波那契数列
 * 解题思路（斐波那契数列 + 大数）：
 * 1. 按照规则求解，时间复杂度：O(n)
 * 2. 动态规划，状态保存
 */

const max = 1e9 + 7;

/**
 * 1. 按照规则求解，时间复杂度：O(n)
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     let a = 0, b = 1, result = n;
//     for (let i = 2; i <= n; i++) {
//         result = (a + b) % max;
//         a = b;
//         b = result;
//     }
//     return result % max;
// };

/**
 * 2. 动态规划，状态保存
 * @param {number} n
 * @return {number}
 */
function fib (n) {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % max;
    }
    return arr[n];
}
