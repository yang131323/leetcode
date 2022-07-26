/**
 * fouty seven: 剑指 Offer 47. 礼物的最大价值
 * 题意：看题可知是典型的迷宫类题，直接使用dfs
 * 解题思路：
 * 1. dfs - 求出每一条路径的和，然后算最大值
 * 2. 动态规划（看题解）
 */

/**
 * 1. dfs - 纯dfs会超时
 * @param {number[][]} grid
 * @return {number}
 */
// var maxValue = function(grid) {
//     let max = 0, row = grid.length - 1, col = grid[0].length - 1;
//     function dfs (r, c, res = 0) {
//         if (r > row || c > col) return res;
//         res += grid[r][c];
//         if (r === row && c === col) {
//             max = Math.max(res, max);
//             return res;
//         }
//         if (c + 1 <= col) dfs(r, c + 1, res);
//         if (r + 1 <= row) dfs(r + 1, c, res);
//         return res;
//     }
//     dfs(0, 0);
//     return max;
// };

/**
 * dp状态复用原矩阵，因为i,j时礼物的最大值只和(i, j - 1)、(i - 1, j)相关，这两个在遍历的时候已经使用完毕
 * @param {*} grid 
 * @returns 
 */
function maxValue (grid) {
    let row = grid.length, col = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 && j == 0) continue;
            // 第一行，只可能来源左边
            if (i == 0) {
                grid[i][j] += grid[i][j - 1];
            // 第一例，只可能来源上边
            } else if (j == 0) {
                grid[i][j] += grid[i - 1][j];
            // 剩下的情况，可能来源于上边和左边
            } else {
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }
    
    return grid[row - 1][col - 1];
}

/**
 * bfs - 取最大值没有连接起来
 * @param {number[][]} grid
 * @return {number}
 */
// function maxValue (grid) {
//     let max = 0, row = grid.length, col = grid[0].length, queue = [[{
//         r: 0,
//         c: 0,
//         val: grid[0][0]
//     }]];
//     while (queue.length) {
//         const nodes = queue.shift();
//         const nextNodes = [];
//         const arr = [];
//         for (const node of nodes) {
//             arr.push(node.val);
//             if (node.c > col || node.r > row) continue;
//             node.c + 1 < col && nextNodes.push({
//                 r: node.r,
//                 c: node.c + 1,
//                 val: grid[node.r][node.c + 1]
//             });
//             node.r + 1 < row && nextNodes.push({
//                 r: node.r + 1,
//                 c: node.c,
//                 val: grid[node.r + 1][node.c]
//             });
//         }
//         nextNodes.length && queue.push(nextNodes);
//         max += Math.max(...arr);
//     }
//     return max;
// }