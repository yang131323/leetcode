/**
 * two-hundred-and-thirty-nine: 239. 滑动窗口最大值
 * 解题思路：
 * 1. 单调队列（单调递减）
 */

// function SingleQueue () {
//     this.queue = [];
// }

// SingleQueue.prototype.push = function (num) {
//     while (this.queue.length) {
//         if (this.queue[this.queue.length - 1] >= num) break;
//         this.queue.pop();
//     }
//     this.queue.push(num);
// }

// SingleQueue.prototype.pop = function (num) {
//     if (this.queue.length && num == this.queue[0]) this.queue.shift();
// }

// SingleQueue.prototype.front = function () {
//     return this.queue[0];
// }

// SingleQueue.prototype.end = function () {
//     return this.queue[this.queue.length - 1];
// }

// /**
//  * 模拟实现单调队列
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function(nums, k) {
//     let result = [];
//     const singleQueue = new SingleQueue();
//     for (let i = 0; i < k; i++) {
//         singleQueue.push(nums[i]);
//     }
//     result.push(singleQueue.front());
//     for (let i = k; i < nums.length; i++) {
//         singleQueue.pop(nums[i - k]);
//         singleQueue.push(nums[i]);
//         result.push(singleQueue.front());
//     }
//     return result;
// };

/**
 *  优化版本
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow (nums, k) {
    const stack = [], result = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
        if (i >= k - 1) {
            result.push(nums[stack[0]]);
            const index = i - k + 1;
            (stack[0] <= index || k == 1) && stack.shift();
        }
    }
    return result;
}