/**
 * fourty-one: 剑指 Offer 41. 数据流中的中位数
 * 解题思路：
 * 1. 快排
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let len = this.nums.length;
    if (!len || this.nums[len - 1] <= num) {
        this.nums.push(num);
    } else if (this.nums[0] > num) {
        this.nums.unshift(num);
    } else {
        for (let i = len - 1; i >= 0; i--) {
            if (this.nums[i] <= num) {
                this.nums.splice(i + 1, 0, num);
                break;
            }
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let len = this.nums.length;
    let mid = len >> 1;
    if (!len) return null;
    if ((len % 2) === 1) {
        return this.nums[mid];
    } else {
        return (this.nums[mid - 1] + this.nums[mid]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */