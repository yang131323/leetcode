/**
 * seven: 剑指 Offer II 007. 数组中和为 0 的三个数
 * 解题思路：
 * 1. 双指针（排序 —— 去重、双指针求两和）
 */

/**
 * 1. 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [], len = nums.length - 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (i && nums[i - 1] === nums[i]) continue;
        let l = i + 1, r = len;
        while (l < r) {
            if (l > i + 1 && nums[l - 1] === nums[l]) {
                l++;
                continue;
            };
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
            } else if (sum > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    return res;
};