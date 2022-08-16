/**
 * twenty-nine: 剑指 Offer 29. 顺时针打印矩阵
 * 解题思路：
 * 1. 按照规则遍历，遍历过的元素变为false，遇到false/越界就转向（0 - 右 1 - 下 2 - 左 3 - 上）
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    let l = 0, r = matrix[0].length - 1, u = 0, d = matrix.length - 1;
    while (true) {
        for (let i = l; i <= r; i++) result.push(matrix[u][i]);
        if ((++u) > d) break;
        for (let i = u; i <= d; i++) result.push(matrix[i][r]);
        if ((--r) < l) break;
        for (let i = r; i >= l; i--) result.push(matrix[d][i]);
        if ((--d) < u) break;
        for (let i = d; i >= u; i--) result.push(matrix[i][l]);
        if ((++l) > r) break;
    }
    return result;
};