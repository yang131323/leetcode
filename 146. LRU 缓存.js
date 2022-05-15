/**
 * one-hundred-and-fourty-six: LRU 缓存
 * 解题思路：
 * 因为需要O(1)的时间复杂度，所以采用数组（队列）和对象（哈希）结合
 * 取值和更新值都将当前值更新为最新的，如果新增值先判断容量是否还允许，不允许的话先推出最旧的元素
 * 怀疑leetcode内部的（JavaScript）测试用例有问题，log日志打印get的调用不仅仅只有它输入的get命令，还会有额外的调用
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.len = capacity;
    this.queue = [];
    this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.hasOwnProperty(key)) {
        const node = this.map[key];
        this.queue.splice(node.idx, 1);
        this.queue.push(key);
        this.map[key] = {
            idx: this.queue.length - 1,
            val: node.val
        };
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.hasOwnProperty(key)) {
        const node = this.map[key];
        this.queue.splice(node.idx, 1);
        this.queue.push(key);
        this.map[key] = {
            idx: this.queue.length - 1,
            val: value,
        };
    } else {
        if (this.queue.length == this.len) {
            const preKey = this.queue.shift();
            delete this.map[preKey];
        }
        this.queue.push(key);
        this.map[key] = {
            idx: this.queue.length - 1,
            val: value,
        };
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

