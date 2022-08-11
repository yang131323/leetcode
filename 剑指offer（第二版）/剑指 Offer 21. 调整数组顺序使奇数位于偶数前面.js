/**
 * twenty one: 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 解题思路：
 * 1. 双指针
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let len = nums.length, l = 0, r = len - 1;
    while (l < r) {
        while ((nums[l] % 2)) l++;
        while (r >= 0 && !(nums[r] % 2)) r--;
        if (l >= r) break;
        const temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    return nums;
};