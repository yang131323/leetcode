/**
 * six hundred seventy four: 674. 最长连续递增序列
 * 解题思路：
 * 1. 一次遍历
 * 2. 动态规划
 */

/**
 * 1. 一次遍历/动态规划优化版
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0;
    // num：表示上一个数字最长连续子序列长度
    let num = 1, max = 0;
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] - nums[i - 1]) > 0) {
            num++;
        } else {
            max = Math.max(num, max);
            num = 1;
        }
    }
    return Math.max(num, max);
};