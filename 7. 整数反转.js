/**
 * seven: 整数反转
 * 解题思路：
 * 1. 暴力：tostring -> reverse -> tonumber
 * 2. 除10取余
 */

/**
 * 暴力
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     const isPositiveNum = x > 0, maxSize = 2 ** 31;
//     x = +Math.abs(x).toString().split('').reverse().join('');
//     x = isPositiveNum ? x : -x;
//     if (x > maxSize - 1 || x < -maxSize) {
//         x = 0;
//     }
//     return x;
// };

/**
 * 模拟这个过程：除10取余
 * @param {*} x 
 * @returns 
 */
// function reverse (x) {
//     const maxSize = 2 ** 31, maxBit = 10 ** 9, isPositiveNum = x > 0;
//     x = Math.abs(x);
//     if (x / maxBit > 1 && x % 10 >= 3) {
//         return 0;
//     }
//     let result = 0;
//     while (x) {
//         result = result * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     result = isPositiveNum ? result : -result;
//     if (result > maxSize - 1 || result < -maxSize) {
//         result = 0;
//     }
//     return result;
// }

/**
 * 题解版：暴力版没有考虑不能存储超过32位的数字
 * @param {*} x 
 */
function reverse (x) {
    let result = 0;
    while (x) {
        const isPositiveOverflow = result > 214748364 || result == 214748364 && x > 7;
        const isNegativeOverflow = result < -214748364 || result == -214748364 && x < -8;
        if (isPositiveOverflow || isNegativeOverflow) {
            return 0;
        }
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return result;
}
