/**
 * fifty：剑指 Offer 50. 第一个只出现一次的字符
 * 解题思路：
 * 1. 暴力，时间复杂度O(n ^ 2)
 * 2. set，O(n)
 */

/**
 * 2. set，O(n)
 * @param {string} s
 * @return {character}
 */
// var firstUniqChar = function(s) {
//     const set = new Set(), map = {};
//     for (const char of s) {
//         if (!map[char]) {
//             map[char] = 1;
//         } else {
//             set.add(char)
//         }
//     }
//     for (const char of s) {
//         if (!set.has(char)) return char;
//     }
//     return ' ';
// };

/**
 * 2. map，内存优化版
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const map = {};
    for (const char of s) {
        if (map[char] == null) {
            map[char] = true;
        } else if (map[char]) {
            map[char] = false;
        }
    }
    for (const char of s) {
        if (map[char]) return char;
    }
    return ' ';
};