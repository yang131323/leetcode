/**
 * fifty-nine：59. 螺旋矩阵 II
 * 解题思路：
 * 1. 模拟
 */

/**
 * 1. 模拟
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = [];
    for (let i = 0; i < n; i++) res[i] = [];
    // 模拟上下左右四个边界
    let l = 0, u = 0, d = n - 1, r = n - 1, num = 0, tar = n * n;
    while (num < tar) {
        for (let i = l; i <= r; i++) res[u][i] = ++num;
        ++u;
        for (let i = u; i <= d; i++) res[i][r] = ++num;
        --r;
        for (let i = r; i >= l; i--) res[d][i] = ++num;
        --d;
        for (let i = d; i >= u; i--) res[i][l] = ++num;
        ++l;
    }
    return res;
};