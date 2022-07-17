/**
 * three: 剑指 Offer 03. 数组中重复的数字
 * 解题思路：
 * 1. 使用map标记每个数字的次数/是否出现过，时间复杂度：O(n)，空间复杂度：O(n)
 * 2. 使用一个长度为n的数组标记这个数字是否出现过，时间复杂度：O(n)，空间复杂度：O(n)
 * 3. 原地交换（看题解），时间复杂度：O(n)，空间复杂度：O(1)
 */

/**
 * 1. 使用map
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
//     let map = {};
//     for (const num of nums) {
//         if (map[num]) return num;
//         map[num] = true;
//     }
//     return -1;
// };

/**
 * 2. 使用数组标记
 * @param {number[]} nums
 * @return {number}
 */
// function findRepeatNumber (nums) {
//     let arr = Array(nums.length).fill(false);
//     for (const num of nums) {
//         if (arr[num]) return num;
//         arr[num] = true;
//     }
//     return -1;
// }

/**
 * 3. 原地交换
 * @param {number[]} nums
 * @return {number}
 */
function findRepeatNumber (nums) {
    for (let i = 0, len = nums.length; i < len;) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        const num = nums[i];
        if (num === nums[num]) return num;
        nums[i] = nums[num];
        nums[num] = num;
    }
    return -1;
}