/**
 * fifty seven: 剑指 Offer 57. 和为s的两个数字
 * 解题思路：
 * 1. 建立map，遍历找到对应的就返回
 * 2. 双指针
 */

/**
 * 1. 建立map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let set = new Set();
//     for (const num of nums) {
//         if (set.has(target - num)) return [num, target - num];
//         set.add(num);
//     }
// };

/**
 * 2. 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum === target) return [nums[l], nums[r]];
        if (sum > target) {
            r--;
        } else {
            l++;
        }
    }
}
