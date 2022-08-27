/**
 * ten: 10. 正则表达式匹配
 * 解题思路
 * 1. 利用现成的正则 - 应该违反题意
 * 2. 模拟这个过程
 */

/**
 * 使用现成的正则
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     return new RegExp(`^${p}$`).test(s);
// };

/**
 * 动态规划
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch (s, p) {
    const r = s.length, c = p.length, flags = new Array(r + 1);
    for (let i = 0; i <= r; i++) {
        flags[i] = [];
    }
    flags[0][0] = true;
    for (let i = 0; i < c; i++) {
        if (p[i] == '*' && flags[0][i - 1]) {
            flags[0][i + 1] = true;
        }
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (s[i] == p[j] || p[j] == '.') {
                flags[i + 1][j + 1] = !!flags[i][j]
            } else if (p[j] == '*' && s[i] != p[j - 1] && p[j - 1] != '.') {
                flags[i + 1][j + 1] = !!flags[i + 1][j - 1];
            } else if (p[j] == '*' && (s[i] == p[j - 1] || p[j - 1] == '.')) {
                flags[i + 1][j + 1] = !!flags[i + 1][j] || !!flags[i + 1][j - 1] || !!flags[i][j + 1];
            } 
        }
    }
    return !!flags[r][c];
}