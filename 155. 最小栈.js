/**
 * one-hundred-and-fifty-five：155. 最小栈
 * 解题思路：
 * 维护两个栈，一个原始栈，一个有序栈
 * 栈顶就是最小元素，每次入栈进行排序
 */

// var MinStack = function() {
//     this.stack = [];
//     this.sortStack = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val)
//     const changeStack = [];
//     const len = this.sortStack.length;
//     if (!len || val <= this.sortStack[this.sortStack.length - 1]) {
//         this.sortStack.push(val);
//     } else {
//         while (true) {
//             if (!this.sortStack.length || val <= this.sortStack[this.sortStack.length - 1]) {
//                 this.sortStack.push(val);
//                 while (changeStack.length) {
//                     this.sortStack.push(changeStack.pop());
//                 }
//                 break;
//             } else {
//                 changeStack.push(this.sortStack.pop());
//             }
//         }
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     const val = this.stack.pop();
//     const changeStack = [];
//     while (true) {
//         if (val === this.sortStack[this.sortStack.length -1]) {
//             this.sortStack.pop();
//             while (changeStack.length) {
//                 this.sortStack.push(changeStack.pop());
//             }
//             break;
//         } else {
//             changeStack.push(this.sortStack.pop());
//         }
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     const len = this.stack.length;
//     return this.stack[len - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     const len = this.sortStack.length
//     return this.sortStack[len - 1];
// };

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function() {
    this.values = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const len = this.stack.length;
    if (!len || val <= this.stack[len - 1]) {
        this.stack.push(val);
    }
    this.values.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.values.pop() == this.stack[this.stack.length - 1]) {
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.values.length;
    return this.values[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const len = this.stack.length;
    return this.stack[len - 1];
};
