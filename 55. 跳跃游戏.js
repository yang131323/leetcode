/**
 * fitty five: 跳跃游戏
 * 解题思路：
 * 可以可容易的看出，这题就是枚举所所有的可能，例如：nums = [2,3,1,1,4]，那么第一步就有1、2两种可能，然后一次遍历每种可能
 * 因此该题就可以使用dfs
 * 1. dfs
 * 2. bfs
 */

/**
 * dfs - 超出时间限制
 * 使用缓存也会超出时间限制
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums, i = 0, cache = {}) {
//     if (i == nums.length - 1) {
//         return true;
//     }
//     if (nums[i] == 0 && i < nums.length - 1) {
//         return false
//     }
//     let result = false
//     for (let j = 1; j <= nums[i]; j++) {
//         const idx = i + j;
//         const status = cache[idx] ? cache[idx] : canJump(nums, idx);
//         cache[idx] = status;
//         if (status) {
//             result = true
//         };
//     }
//     return result;
// };

/**
 * 优化版本
 */
// function canJump (nums) {
//     const stack = [0];
//     let pre = 0;
//     while (stack.length) {
//         const t = stack.shift();
//         const len = t + nums[t];
//         if (pre >= len) continue;
//         for (let i = pre + 1; i <= len; i++) {
//             stack.push(i);
//         }
//         pre = len;
//         if (pre >= nums.length - 1) return true;
//     }
//     return !!pre >= nums.length - 1;
// }

/**
 * 题解版
 * @param {*} nums 
 * @returns 
 */
function canJump (nums) {
    let tail = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > tail) return false
        tail = Math.max(tail, i + nums[i]);
        if (tail >= nums.length - 1) return true
    }
    return true;
}
