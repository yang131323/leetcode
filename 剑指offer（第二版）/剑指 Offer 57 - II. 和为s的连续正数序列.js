/**
 * fifty seven：剑指 Offer 57 - II. 和为s的连续正数序列
 * 解题思路：
 * 1. 滑动窗口
 */

/**
 * 1. 滑动窗口
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let arr = [1], res = [], end = (target >> 1) + 1, sum = 1, p = 1;
    while (p <= end) {
        if (sum == target) {
            res.push([...arr]);
            sum -= arr.shift();
        } else if (sum < target) {
            arr.push(++p);
            sum += p;
        } else if (sum > target) {
            sum -= arr.shift();
        }
    }
    return res;
};