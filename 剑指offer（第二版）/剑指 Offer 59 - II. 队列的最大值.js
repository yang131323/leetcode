/**
 * fifty nine：剑指 Offer 59 - II. 队列的最大值
 * 解题思路：
 * 1. 定义一个数组和内部最大值
 */

var MaxQueue = function() {
    this.queue = [];
    this.max = -Infinity;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (!this.queue.length) return -1;
    return this.max;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    if (value > this.max) this.max = value;
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (!this.queue.length) return -1;
    const result = this.queue.shift();
    if (this.max === result) {
        this.max = Math.max(...this.queue);
    }
    return result;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */