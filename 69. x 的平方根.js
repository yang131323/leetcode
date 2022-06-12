/**
 * sixty nine: x 的平方根 
 * 解题思路：
 * 提示一下 y = x ^ 2，求x（正数）
 * 1. 二分法
 * 2. 牛顿迭代
 */

/**
 * 1. 二分法 - 时间复杂度较高
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     let res = x / 2, pre = 0;
//     while (true) {
//         const val = res * res - x;
//         if (val >= 0 && val < 1e-6) break;
//         if (val < 0) {
//             res = (res + pre) / 2;
//         } else {
//             res = res / 2;
//             pre = preVal;
//         }
//     }
//     return res;
// };

/**
 * 2. 牛顿迭代
 * @param {*} x 
 * @returns 
 */
function mySqrt (x) {
    let res = x;
    while (res * res - x > 1e-6) {
        res = 0.5 * (res + x / res);
    }
    return Math.floor(res);
}