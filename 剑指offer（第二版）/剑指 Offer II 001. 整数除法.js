/**
 * one: 剑指 Offer II 001. 整数除法
 * 解题思路：
 * 题意：根据题目不能用*和/，所以只能使用+、-，因为是整数，所以使用+、-配合循环就能得出结果
 * 1. -法模拟，减法模拟会超时
 * 2. +法模拟，配上翻倍，如果超了，再变成一步一步加
 */

/**
 * 1. -法模拟
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// var divide = function(a, b) {
//     let res = 0, isNeg = false;
//     if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
//         a < 0 && (a = -a);
//         b < 0 && (b = -b);
//     } else {
//         isNeg = true;
//         a < 0 && (a = -a);
//         b < 0 && (b = -b);
//     }
//     while (a > 0) {
//         a -= b;
//         if (a < 0) break;
//         res++;
//     }
//     res = isNeg ? -res : res;
//     let maxNum = 2 ** 31 - 1;
//     return res > maxNum || res < -(maxNum + 1) ? maxNum : res;
// };

/**
 * 2. +法模拟
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function divide (a, b) {
    let res = 0, sum = 0, sign = (a > 0) ^ (b > 0) ? 0 : 1;
    a < 0 && (a = -a);
    b < 0 && (b = -b);
    while (sum < a) {
        let temp = b, rest = a - sum, num = 1;
        while (temp < rest) {
            const tSum = temp + temp;
            if (tSum > rest) break;
            temp = tSum;
            num += num;
        }
        temp += sum;
        if (temp > a) break;
        sum = temp;
        res+= num;
    }
    res = sign ? res : -res;
    const maxNum = 2 ** 31 - 1;
    return res > maxNum || res < -(maxNum + 1) ? maxNum : res;
}