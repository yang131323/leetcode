/**
 * five hundred and sixty seven: 567. 字符串的排列
 * 解题思路：
 * 1. 滑动窗口（n长度内的字符出现一致）
 * 2. 题解版
 */

/**
 * 1. 滑动窗口（n长度内的字符出现一致）
 * 详情：
 * 1. 维护两个map，一个表示s1字符出现次数，一个表示s1长度的所缺少的字符
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//     const len = s1.length;
//     let nLenMap = {}, s1Map = {};
//     for (const char of s1) nLenMap[char] = s1Map[char] = !s1Map[char] ? 1 : s1Map[char] + 1;
//     for (let i = 0; i < s2.length; i++) {
//         const char = s2[i];
//         const k = i - len;
//         if (i >= len && s1Map[s2[k]]) {
//             let num = 0;
//             for (let j = k + 1; j <= i; j++) s2[j] && num++;
//             // 如果某个字符在一个区间内出现多次会出现误差
//             if (num < s1Map[s2[k]]) nLenMap[s2[k]] = !nLenMap[s2[k]] ? 1 : nLenMap[s2[k]] + 1;
//         }
//         if (nLenMap[char]) nLenMap[char] == 1 ? delete nLenMap[char] : nLenMap[char]--;
//         if (!Object.keys(nLenMap).length) return true;
//     }
//     return !Object.keys(nLenMap).length;
// };

// function equip (s1, s2) {
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] != s2[i]) return false;
//     }
//     return true;
// }

function equip (map1, map2) {
    for (const key in map1) {
        if (map1[key] != map2[key]) return false;
    }
    return true;
}

/**
 * 2. 题解版
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion (s1, s2) {
    const len1 = s1.length, len2 = s2.length, mapS1 = {}, mapS2 = {};
    for (const char of s1) mapS1[char] = !mapS1[char] ? 1 : mapS1[char] + 1;
    for (let i = 0; i < len2; i++) {
        const char = s2[i];
        if (i >= len1) {
            if (equip(mapS1, mapS2)) return true;
            const ch = s2[i - len1];
            mapS2[ch]--;
        }
        mapS2[char] = !mapS2[char] ? 1 : mapS2[char] + 1;
    }
    return equip(mapS1, mapS2);
}