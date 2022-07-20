/**
 * fourteen - two: 剑指 Offer 14- II. 剪绳子 II
 * 解题思路（大数+剪绳子）：
 * 1. 换成3的倍数，对余数分情况处理：0 - 3的整数倍、1 - 除以3，然后转为 2 * 2、2 - 直接乘以2，结果是一个大数
 *  1.1 累计取余
 *  1.2 快速幂取余
 */

/**
 * 1.1 累计取余
 * @param {number} n
 * @return {number}
 */
// var cuttingRope = function(n) {
//     if (n <= 3) return n - 1;
//     const divi = Math.floor(n / 3), mod = n % 3, max = 1e9 + 7;
//     let result = divi < 18 ? 3 ** divi : 3 ** 18;
//     for (let i = 1; i <= divi - 18; i++) {
//         result = (result * 3) % max;
//     }
//     if (mod == 1) {
//         result = result / 3 * 4;
//     } else if (mod == 2) {
//         result = result * 2;
//     }
//     return result % max;
// };

/**
 * 1.1 累计取余（优化版）
 * @param {number} n
 * @return {number}
 */
// function cuttingRope (n) {
//     if (n <= 3) return n - 1;
//     const divi = Math.floor(n / 3), mod = n % 3, max = 1e9 + 7;
//     let result = divi < 18 ? 3 ** divi : 3 ** 18;
//     for (let i = 1; i <= divi - 19; i++) {
//         result = (result * 3) % max;
//     }
//     if (mod === 0) result *= 3;
//     if (mod === 1) result = divi < 18 ? result / 3 * 4 : result * 4;
//     if (mod === 2) result *= 6;
//     return result % max;
// }

/**
 * 1.2 快速幂取余
 * @param {number} n
 * @return {number}
 */
function cuttingRope (n) {
    if (n <= 3) return n - 1;
    const mod = n % 3, divi = Math.floor(n / 3), max = 1e9 + 7;
    let result = 1;
    for (let i = divi - 1; i > 0; i = i >> 1) {
        if (i % 2 == 1) result = (result * 3) % max;
        result = (result * result) % max;
    }
    if (mod === 0) result *= 3;
    if (mod === 1) result *= 4;
    if (mod === 2) result *= 6;
    return result % max;
}