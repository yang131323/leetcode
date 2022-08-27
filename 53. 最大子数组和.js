/**
 * fifty-three: 53. 最大子数组和
 * 解题思路
 * 1. 动态规划：以i结尾的最大子序列之和和当前最大和进行比较
 *  - 已有最大值、当前值、已有最大值和当前值之和的最大值
 *  - 更新前一个值的最大值：如果前一个最大值小于0，显然从当前值开始能获得更大的数
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