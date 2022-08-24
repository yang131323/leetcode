/**
 * sixty-two：62. 不同路径
 * 解题思路：
 * 1. dfs
 */

/**
 * 1. dfs - 超时
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     let map = [], num = 0;
//     for (let i = 0; i < m; i++) {
//         map[i] = [];
//     }

//     function dfs (r, c) {
//         if (r == (m - 1) && c == (n - 1)) {
//             num++;
//             return;
//         }
//         if (r >= m || c >= n || map[r][c]) {
//             return;
//         }
//         map[r][c] = 1;
//         // 向下
//         dfs(r + 1, c);
//         // 向右
//         dfs(r, c + 1);
//         map[r][c] = 0;
//     }

//     dfs(0, 0);

//     return num;
// };

/**
 * 1. dfs - 优化
 * 详解：
 * 实际上到i，j的路径树为dp[i - 1][j] + dp[i][j - 1]
 * 只和前面和上面一个元素相关，因此遍历所有项就行，时间复杂度O(m * n)
 * 第一行和第一列只能由前面或者上面的节点到达，因此第一行第一列的值为1
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// function uniquePaths (m, n) {
//     let dp = [[]];
//     for (let i = 1; i <= m; i++) {
//         dp[i] = [];
//         dp[i][1] = 1;
//     }
//     dp[1].length = n + 1;
//     dp[1].fill(1);
//     for (let i = 2; i <= m; i++) {
//         for (let j = 2; j <= n; j++) {
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//         }
//     }
//     return dp[m][n];
// }

/**
 * 1. dfs - 内存优化
 * 详解：
 * 实际上到i，j的路径树为dp[i - 1][j] + dp[i][j - 1]
 * 只和前面和上面一个元素相关，因此遍历所有项就行，时间复杂度O(m * n)
 * 第一行和第一列只能由前面或者上面的节点到达，因此第一行第一列的值为1
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths (m, n) {
    let dp = Array(n);
    dp.fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // dp[j]表示上一个元素，dp[j - 1]表示前一个元素
            dp[j] += dp[j - 1];
        }
    }

    return dp[n - 1];
}