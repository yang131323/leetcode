/**
 * three hundred: 300. 最长递增子序列
 * 解题思路
 * 1. 动态规划
 */

/**
 * 1. 动态规划
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//     let result = 1, len = nums.length, dp = [];
//     dp[0] = 1;
//     for (let i = 1; i < len; i++) {
//         dp[i] = 1;
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//         result = Math.max(result, dp[i]);
//     }
//     return result;
// };

/**
 * 动态规划优化版
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS (nums) {
    const res = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const len = res.length;
        if (nums[i] > res[len - 1]) {
            res.push(nums[i]);
        } else if (nums[i] < res[len - 1]) {
            twoSplitFind(res, 0, res.length - 1, nums[i]);
        }
    }
    return res.length;
}

function twoSplitFind (nums, l, r, t) {
    let pos;
    while (l <= r) {
        const mid = (l + r) >> 1
        if (nums[mid] < t) {
            pos = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    nums[pos == null ? 0 : pos + 1] = t;
}