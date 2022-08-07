/**
 * fifty eigth: 剑指 Offer 58 - II. 左旋转字符串
 * 解题思路：
 * 1. 剪切字符串
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    const len = s.length;
    n = n >= 0 ? n : (len + n);
    return s.substring(n, len) + s.substring(0, n);
};
