/**
 * six hundred and fourty seven: 647. 回文子串
 * 解题思路：
 * 1. 动态规划
 */

/**
 * 1. 动态规划
 * 详解：
 * 计算字符串所有可能，所有可能条件：前一个字符（i）和后一个字符（j）相等，同时i + 1 -> j - 1也为回文串
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const dp = [];
    let num = 0;
    for (let j = 0; j < s.length; j++) {
        dp[j] = [];
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j] && ((j - i) <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                num++;
            }
        }
    }
    return num;
};