/**
 * fourteen: 最长公共前缀
 * 解题思路：
 * 1. 暴力：两次遍历 O(ln ^ 2)
 * 2. 构造一棵树，遍历没有分支的节点
 */

/**
 * 暴力
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const len = strs.length;
    let result = '';
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len;) {
            let prefix = '';
            for (let k = 0; k < strs[i].length; k++) {
                if (strs[i][k] != strs[j][k]) break;
                prefix += strs[i][k];
            }
            result = !result ? prefix : (result.length > prefix.length ? prefix : result);
            if (!result) return result;
        }
    }
    return result;
};

/**
 * 暴力优化版
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const len = strs.length;
    let result = strs[0];
    for (let j = 1; j < len; j++) {
        let prefix = '';
        for (let k = 0; k < strs[j].length; k++) {
            if (strs[0][k] != strs[j][k]) break;
            prefix += strs[0][k];
        }
        result = result.length > prefix.length ? prefix : result;
        if (!result) return result;
    }
    return result;
};