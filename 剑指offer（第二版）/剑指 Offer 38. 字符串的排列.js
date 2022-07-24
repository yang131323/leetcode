/**
 * thiry eight: 剑指 Offer 38. 字符串的排列
 * 解题思路：
 * 1. 排列组合
 */

/**
 * 1. 排列组合
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s, str = '', result = []) {
    if (s.length == 1) {
        result.push(str + s);
        return result;
    }
    let map = {};
    for (let i = 0, len = s.length; i < len; i++) {
        if (map[s[i]]) continue;
        map[s[i]] = true;
        permutation(`${s.substring(0, i)}${s.substring(i + 1, len)}`, str + s[i], result);
    }
    return result;
};