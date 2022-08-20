/**
 * fifty-nine: 剑指 Offer 59 - I. 滑动窗口的最大值
 * 解题思路：
 * 1. 双指针
 * 2. 双指针 + 单调队列（k范围内）
 */

/**
 * 1. 双指针
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let res = [], l = 0, r = 0, max = nums[0];
//     while (r < nums.length) {
//         const len = r - l + 1;
//         if (len === k) {
//             if (l > 0 && nums[l - 1] === max) {
//                 max = nums[l];
//                 for (let i = l + 1; i <= r; i++) {
//                     max = Math.max(max, nums[i]);
//                 }
//             } else {
//                 max = Math.max(max, nums[r]);
//             }
//             res.push(max);
//             r++;
//             l++;
//             continue;
//         }
//         max = Math.max(nums[r], max);
//         r++;
//     }

//     return res;
// };

/**
 * 2. 双指针 + 单调队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// function maxSlidingWindow(nums, k) {
//     const res = [], queue = [];

//     for (let r = 0, l = 1 - k; r < nums.length; r++, l++) {
//         if (l > 0 && nums[l - 1] === queue[0]) queue.shift();
//         while (queue.length && queue[queue.length - 1] < nums[r]) queue.pop();
//         queue.push(nums[r]);
//         if (l >= 0) res.push(queue[0]);
//     }

//     return res;
// }

/**
 * 3. 单指针 + 单调队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow (nums, k) {
    const res = [], queue = [];

    for (let i = 0; i < nums.length; i++) {
        while (queue.length && queue[0] <= (i - k)) queue.shift();
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop();
        queue.push(i);
        // 左边界大于0（i - k + 1）
        if (i >= k - 1) res.push(nums[queue[0]]);
    }

    return res;
}
