/**
 * fourty: 40. 组合总和 II
 * 解题思路：
 * 1. dfs
 */

/**
 * 1. dfs
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [], path = [], len = candidates.length;
    candidates.sort((a, b) => a - b);

    function dfs (start, target) {
        if (target == 0) res.push([...path]);
        if (target <= 0) return;
        for (let i = start; i < len; i++) {
            // 同一层级相同的数字是重复的值，剪枝
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            const val = target - candidates[i]
            if (val < 0) break;
            path.push(candidates[i]);
            dfs(i + 1, val);
            path.pop();
        }
    }

    dfs(0, target);

    return res;
};