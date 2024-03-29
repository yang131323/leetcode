/**
 * one hundred twenty eight: 128. 最长连续序列
 * 解题思路
 * 1. 迭代寻找下一个
 */

/**
 * 1. 迭代
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     if (!nums.length) return 0;
//     const numSet = new Set(nums);
//     let largest = 1;
//     for (const num of numSet) {
//         if (numSet.has(num - 1)) continue;
//         let curNum = num, curLen = 1;
//         while (numSet.has(curNum + 1)) {
//             curNum += 1;
//             curLen++;
//         }
//         largest = Math.max(largest, curLen);
//     }
//     return largest;
// };

/**
 * 1. 迭代 + 内存优化版
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    const numSet = new Set(nums);
    let max = 0;
    for (const num of numSet) {
        if (numSet.has(num - 1)) continue;
        let nextNum = num + 1;
        while (numSet.has(nextNum)) nextNum++;
        max = Math.max(max, nextNum - num);
    }
    return max;
};