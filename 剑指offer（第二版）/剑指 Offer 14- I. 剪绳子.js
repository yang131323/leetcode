/**
 * fourteen: 剑指 Offer 14- I. 剪绳子
 * 解题思路（毫无思路，看题解都没有看懂）：
 * 1. 等分为3的乘级最大
 * 2. 动态规划
 */

/**
 * 1. 归纳总结结果法
 * @param {number} n
 * @return {number}
 */
// var cuttingRope = function(n) {
//     if (n <= 3) return n - 1;
//     let mod = n % 3, divi = Math.floor(n / 3), result = 3 ** divi;
//     switch (mod) {
//         case 0: return result;
//         case 1: return result / 3 * 4;
//         case 2: return result * 2;
//     }
// };

/**
 * 2. 动态规划
 * @param {number} n
 * @return {number}
 */
function cuttingRope (n) {
    let max = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        for (let j = 2; j <= Math.ceil(i / 2); j++) {
            max[i] = Math.max(max[i] || 1, j * (i - j), j * max[i - j]);
        }
    }
    return max[n];
}
