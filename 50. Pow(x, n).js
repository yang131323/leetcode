/**
 * fifty: 50. Pow(x, n)
 * 解题思路
 * 1. 模拟：使用循环模拟整个过程
 */

/**
 * 1. 模拟
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//     // if (n == 0) return 1; 
//     let ans = 1;
//     while (n != 0) {
//         if (n > 0) {
//             ans *= x;
//             n--;
//         } else {
//             ans /= x;
//             n++;
//         }
//     }
//     return ans;
// };

/**
 * 1. 模拟优化版
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n == 0) return 1; 
    if (n == 1) return x;
    if (n == -1) return 1 / x; 
    const temp = myPow(x, n >> 1);
    if (n % 2 == 0) {
        return temp * temp;
    } else {
        return x * myPow(x, n - 1);
    }
};