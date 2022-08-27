/**
 * three: 3. 无重复字符的最长子串
 * 解题思路：
 * 1. 暴力：遍历两遍 + 查找重复的字符：O(n ^ 3)
 * 2. 滑动窗口
 */

/**
 * 暴力优化版（神似滑动窗口因为使用indexOf时间复杂度变为O(n ^ 2)）
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     let result = 0;
//     let str = '';
//     for (let i = 0; i < s.length; i++) {
//         const flag = str.indexOf(s[i]);
//         if (flag > -1) {
//             result = Math.max(result, str.length);
//             str = str.slice(flag + 1);
//         }
//         str += s[i];
//     }
//     return Math.max(result, str.length);
// };

/**
 * 滑动窗口 map版
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s) {
    const map = new Map();
    let result = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            left = Math.max(left, map.get(s[i]));
        }
        map.set(s[i], i);
        result = Math.max(result, i + 1 - left);
    }
    return result;
}
