/**
 * forty-nine: 字母异位词分组
 * 1. 暴力：排序 + map
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (const str of strs) {
        const sortStr = str.split('').sort();
        map[sortStr] ? map[sortStr].push(str) : (map[sortStr] = [str]);
    }
    return Object.values(map);
};