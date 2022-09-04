/**
 * forty five：45. 跳跃游戏 II
 * 解题思路：
 * 1. 动态规划
 */

/**
 * 1. 动态规划
 * 详解：
 * 1. 建立每个位置可以达到的最远处和到达当前位置的最小距离
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//     const map = [], dp = [0];
//     // 存储每个位置可以达到的最远处
//     for (let i = 0; i < nums.length; i++) {
//         map[i] = i != 0 ? i + nums[i] : nums[i];
//     }
//     for (let i = 1; i < nums.length; i++) {
//         let dis = Infinity;
//         for (let j = 0; j < i; j++) {
//             if (map[j] >= i) dis = Math.min(dis, dp[j] + 1);
//         }
//         dp[i] = dis;
//     }
//     return dp[nums.length - 1];
// };

/**
 * 1. 动态规划 - 优化版
 * 详解：
 * 1. 记录到每个位置所有的最小次数
 * @param {number[]} nums
 * @return {number}
 */
// function jump (nums) {
//     const dp = [0];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j <= i + nums[i]; j++) {
//             dp[j] = Math.min(dp[i] + 1, dp[j] || Infinity);
//         }
//     }
//     return dp[nums.length - 1];
// }

/**
 * 1. 动态规划 - 优化版
 * 详解：记录每次跳的最大距离
 */
function jump (nums) {
    let end = 0, maxPos = 0, num = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        // 当前这一步能跳的最大距离
        maxPos = Math.max(maxPos, i + nums[i]);
        // 到了当前这一步的最大距离后更新为下一步的位置
        if (i == end) {
            end = maxPos;
            num++;
        }
    }
    return num;
}