/**
 * thirteen: 剑指 Offer 13. 机器人的运动范围
 * 解题思路：
 * 1. 暴力求解，时间复杂度：O(n ^ 2) - 有问题（如果有围起来）
 * 2. dfs
 */

/**
 * 1. 暴力求解，时间复杂度：O(n ^ 2)
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var movingCount = function(m, n, k) {
//     let result = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i + j <= k) result++;
//         }
//     }
//     return result;
// };

/**
 * 2. dfs
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function movingCount (m, n, k) {
    let map = Array(m);
    for (let i = 0; i < m; i++) {
        map[i] = [];
    }
    function travel (x, y, xVal, yVal) {
        if (xVal + yVal > k || x < 0 || y < 0 || x > m - 1 || y > n - 1 || map[x][y]) return 0;
        map[x][y] = true;
        /** 因为已经加9，所以需要减8，因为10=1 + 0 */
        let r =  travel(x + 1, y, (x + 1) % 10 == 0 ? xVal - 8 : xVal + 1, yVal);
        let d = travel(x, y + 1, xVal, (y + 1) % 10 == 0 ? yVal - 8 : yVal + 1);
        return 1 + r + d;
    }
    return travel(0, 0, 0, 0);
}
