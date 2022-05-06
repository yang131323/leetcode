/**
 * 解题思路
 * 推出公式：f(n) = f(n - 1) + f(n - 2)
 * 1. 递归的方式求值
 */

/**
 * 1. 递归解法
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n, map = {
//     1: 1,
//     2: 2
// }) {
//     if (map[n]) return map[n];
//     const fN1 = climbStairs(n - 1, map);
//     const fN2 = climbStairs(n - 2, map);
//     if (!map[n - 1]) map[n - 1] = fN1;
//     if (!map[n - 2]) map[n - 2] = fN2;
//     return fN1 + fN2;
// };

/**
 * 根据公式顺序求解
 * @param {number} n
 * @return {number}
 */
// function climbStairs(n) {
//     let a = 0, b = 1, c = a + b;
//     for (let i = 2; i <= n; i++ ) {
//         a = b;
//         b = c;
//         c = a + b;
//     }
//     return c;
// };

/**
 * 使用非波拉契公式，非波拉契第n项是从0开始的
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    const a = Math.pow((Math.sqrt(5) + 1) / 2, n + 1);
    const b = Math.pow((1 - Math.sqrt(5)) / 2, n + 1);
    const c = 1 / Math.sqrt(5);
    return (a - b) * c;
};
