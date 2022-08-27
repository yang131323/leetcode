/**
 * two-hundred-and-fofty-two: 242. 有效的字母异位词
 * 1. 暴力：map存每个字符，一个加一个减
 * 2. 排序后进行对比
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    if (s.length != t.length) return false;
    for (let i = 0; i < s.length; i++) {
        map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
        map.has(t[i]) ? map.set(t[i], map.get(t[i]) - 1) : map.set(t[i], -1);
        map.get(s[i]) == 0 && map.delete(s[i]);
        map.get(t[i]) == 0 && map.delete(t[i]);
    }
    return !map.size;
};