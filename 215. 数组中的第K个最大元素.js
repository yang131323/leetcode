/**
 * two hundred and fifteen: 数组中的第K个最大元素
 * 解题思路：
 * 1. 暴力：直接排序，返回低k大的元素 - 应该不符合题意
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => b - a);
    return nums[k - 1];
};