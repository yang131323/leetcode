/**
 * fourty two: 剑指 Offer 42. 连续子数组的最大和
 * 解题思路：
 * 1. 动态规划，d[i] = Max(d[i - 1] + max(nums[i], 0), max)
 */

/**
 * 1. 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = nums[0],
        max = pre;
    for (let i = 1; i < nums.length; i++) {
        const cur = pre + nums[i];
        max = Math.max(max, cur, nums[i]);
        pre = cur > nums[i] ? cur : nums[i];
    }
    return max;
};
