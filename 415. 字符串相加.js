/**
 * four hundred fifty five: 415. 字符串相加
 * 解题思路
 * 1. 模拟过程
 */

/**
 * 1. 模拟过程
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const len1 = num1.length, len2 = num2.length, max = Math.max(len1, len2);
    let res = '', mod = 0;
    for (let i = 0; i < max; i++) {
        if ((i >= len1 || i >= len2) && !mod) {
            const str = i >= len1 ? num2.substring(0, len2 - i) : num1.substring(0, len1 - i);
            res = str + res;
            break;
        }
        const n1 = parseInt(num1[len1 - i - 1] || 0);
        const n2 = parseInt(num2[len2 - i - 1] || 0);
        const sum = n1 + n2 + mod;
        res = (sum % 10) + res;
        mod = Math.floor(sum / 10);
    }
    if (mod > 0) res = mod + res;
    return res;
};