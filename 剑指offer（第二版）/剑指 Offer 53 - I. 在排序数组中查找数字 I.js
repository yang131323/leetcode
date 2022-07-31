/**
 * fifty three: 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * 解题思路：
 * 1. 二分法 + 双指针
 */

/**
 * 1. 二分法 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let num = 0, r = nums.length - 1, l = 0, idx = -1;
    while (l <= r) {
        const mid = (l + r) >> 1;
        if (nums[mid] === target) {
            idx = mid;
            break;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    if (idx > -1) {
        num = 1;
        l = r = idx;
        while (nums[--l] === target) num++;
        while (nums[++r] === target) num++;
    }
    return num
};