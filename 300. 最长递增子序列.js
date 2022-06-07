/**
 * three hundred: 最长递增子序列
 * 解题思路
 * 1. 动态规划
 */

/**
 * 1. 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let result = 1, len = nums.length, dp = [];
    dp[0] = 1;
    for (let i = 1; i < len; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(result, dp[i]);
    }
    return result;
};