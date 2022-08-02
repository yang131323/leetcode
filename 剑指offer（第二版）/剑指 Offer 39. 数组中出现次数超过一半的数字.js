/**
 * thiry nine: 剑指 Offer 39. 数组中出现次数超过一半的数字
 * 解题思路：
 * 1. map
 * 2. 摩尔投票法
 */

/**
 * 1. map
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     const len = nums.length >> 1, map = {};
//     if (len == 0) return nums[0];
//     for (const num of nums) {
//         if (!map[num]) {
//             map[num] = 1;
//             continue;
//         }
//         map[num]++;
//         if (map[num] > len) return num;
//     }
// };

/**
 * 2. 摩尔投票法
 * 详解：
 * 1. 以目标值为准，如果等于目标值就+1，不等于目标值就-1，抵消完后剩下的值就是结果
 * 2. 用votes标志当前的结果，z表示当前被确定的目标，当votes为0，就更新z为当前值
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement (nums) {
    let votes = 0, z;
    for (const num of nums) {
        if (!votes) z = num;
        z == num ? votes++ : votes--;
    }
    return z;
}