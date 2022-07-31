/**
 * fourty eight：剑指 Offer 48. 最长不含重复字符的子字符串
 * 解题思路:
 * 1. 动态规划
 */

function findRepeat (str, s, e, t) {
    for (; s <= e; s++) {
        if (str[s] == t) return s;
    }
    return -1;
}

/**
 * 1. 动态规划
 * 细节如下：
 * a. 当前字符的不包含重复字符串的子串由前一个字符最长子串和当前字符决定
 * b. 如果前一个字符的子串中没有字符和当前字符重复，当前字符的长度+1，否则就是重复字符的后一位
 * c. dp状态数组不记录长度，记录当前字符为止的最长不重复子串的开始位置
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let prevIdx = 0, max = 0;
//     for (let i = 0; i < s.length; i++) {
//         const index = findRepeat(s, prevIdx, i - 1, s[i]);
//         if (index < 0) {
//             max = Math.max(i - prevIdx + 1, max);
//         } else {
//             prevIdx = index + 1;
//         }
//     }
//     return max;
// };

/**
 * 1. 动态规划 + map
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s) {
    let res = 0, map = new Map(), temp = 0;
    for (let i = 0; i < s.length; i++) {
        let idx = map.get(s[i]);
        idx == null && (idx = -1);
        temp = i - idx > temp ? temp + 1 : i - idx;
        res = Math.max(res, temp);
        map.set(s[i], i);
    }
    return res;
}