/**
 * fifty-three: 最大子数组和
 * 解题思路
 * 1. 动态规划：以i结尾的最大子序列之和和当前最大和进行比较
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], preMax = max;
    for (let i = 1; i < nums.length; i++) {
        const sum = preMax + nums[i];
        max = Math.max(sum, nums[i], max);
        preMax = sum > nums[i] ? sum : nums[i];
    }
    return max;
};