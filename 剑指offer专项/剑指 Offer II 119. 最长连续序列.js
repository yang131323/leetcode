/**
 * one hundred and nineteen: 剑指 Offer II 119. 最长连续序列
 * 解题思路：
 * 1. 排序，加一次遍历
 * 2. 哈希
 */

/**
 * 1. 排序，加一次遍历，时间复杂度O(nlogn)
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     let num = 0, max = 0;
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         let temp = nums[i] - nums[i - 1];
//         if (temp == 1) {
//             num++
//         } else if (temp != 1){
//             max = Math.max(num, max);
//             num = 1;
//         }
//     } 
//     return Math.max(num, max);
// };

/**
 * 2. 哈希
 * 详情：
 * 1. 先建立set
 * 2. 然后查找连续的子序列（没有前数字）
 * @param {*} nums 
 * @returns 
 */
// function longestConsecutive (nums) {
//     let max, len = 0, set = new Set(nums);
//     for (let i = 0; i < nums.length; i++) {
//         if (set.has(nums[i] - 1)) continue;
//         let j = nums[i];
//         while (set.has(j)) j++;
//         max = j - 1;
//         len = Math.max(j - nums[i], len);
//     }
//     return len;
// }

/**
 *  for-of优化版
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    const numSet = new Set(nums);
    let largest = 1;
    for (const num of numSet) {
        if (numSet.has(num - 1)) continue;
        let curNum = num;
        while (numSet.has(curNum + 1)) curNum += 1;
        largest = Math.max(curNum - num + 1, largest);
    }
    return largest;
};