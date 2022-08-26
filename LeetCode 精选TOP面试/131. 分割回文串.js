/**
 * one hundred and one: 131. 分割回文串
 * 解题思路：
 * 1. 构造树
 */

/**
 * 1. 构造树
 * 详情：以“aab”为例
 * 1. 第一部分的可能情况：“a”、“aa”、“aab” —— 不满足回文串，进行剪枝，因此第一层确定只有两颗树“a”、“aa”
 * 2. 然后分别解析两棵树的第二层，如“a”、第二层可能是“a”、“ab” - 不满足回文串，进行剪枝，接着构造第三层，只有“b”，长度和字符串长度相等当前树构造完毕
 * 上面有一个前提就是需要知道字符串各部分是不是回文串，因此我们第一步需要建立一个状态数组，来表示字符串各部分的状态
 * 参考liweiwei大神的题解：https://leetcode.cn/problems/palindrome-partitioning/solution/hui-su-you-hua-jia-liao-dong-tai-gui-hua-by-liweiw/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (!s) return [];
    const dp = [], length = s.length, res = [];
    // 构造字符串各子串回文串状态，dp[i][j] 表示字符串i - j是否是回文串
    for (let i = 0; i < length; i++) {
        dp[i] = [];
        for (let j = 0; j <= i; j++) {
            // 字符串j -> i如果要是回文串，i和j字符一定要相等，同时满足：长度小于等于2或者i + 1 -> j - 1是回文串
            if (s[i] === s[j] && ((i - j) <= 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true;
            }
        }
    }

    function dps (idx, len = length, path = []) {
        if (idx == len) return res.push(path);
        for (let i = idx; i < len; i++) {
            if (!dp[idx][i]) continue;
            dps(i + 1, len, [...path, s.substring(idx, i + 1)]);
        }
    }

    dps(0);
    return res;
};