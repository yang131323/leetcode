/**
 * three hundred ninety two：392. 判断子序列
 * 解题思路：
 * 1. 对子序列维护一个队列，遍历元序列
 * 2. 双指针
 */

/**
 * 1. 对子序列维护一个队列，遍历元序列
 * 详情：
 * 如果有多个字符匹配，匹配字符第一次出现能覆盖匹配后面字符的所有情况，反之不能
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
//     const queue = [...s];
//     for (const char of t) {
//         if (char == queue[0]) queue.shift();
//     }
//     return !queue.length;
// };

/**
 * 2. 双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence (s, t) {
    let sIdx = 0;
    for (let i = 0; i < t.length; i++) {
        if (sIdx >= s.length) break;
        if (t[i] == s[sIdx]) sIdx++;
    }
    return sIdx >= s.length;
}
