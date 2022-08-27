/**
 * one hundred eighteen: 118. 杨辉三角
 * 解题思路
 * 1. 模拟
 */

/**
 * 模拟
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = [];
    for (let i = 0; i < numRows; i++) {
        const curRow = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                curRow.push(1);
                continue;
            }
            curRow.push(ans[i - 1][j - 1] + ans[i - 1][j]);
        }
        ans[i] = curRow;
    }
    return ans;
};