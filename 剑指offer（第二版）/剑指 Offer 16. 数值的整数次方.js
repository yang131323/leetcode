/**
 * sixteen：剑指 Offer 16. 数值的整数次方
 * 解题思路：
 * 1. 快速幂
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//     if (n == 0) return 1;
//     if (n == 1) return x;
//     if (n == -1) return 1 / x;
//     let temp = myPow(x, n >> 1);
//     if (n % 2 == 0) {
//         return temp * temp;
//     } else {
//         return x * temp * temp;
//     }
// };

/**
 * 有问题
 */
// function myPow (x, n) {
//     if (n == 0) return 1;
//     let num = n, result = 1;
//     if (n < 0) {
//         num = -num;
//         x = 1 / x;
//     }
//     while (num > 0) {
//         if (num % 2 == 1) result *= x;
//         x *= x;
//         num >>= 1;
//     }
//     return result;
// }