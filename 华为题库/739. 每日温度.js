/**
 * seven hundred and thiry nine: 739. 每日温度
 * 解题思路：
 * 1. 维护一个递减栈（存索引）
 */

/**
 * 1. 维护一个递减栈（存索引）
 * 详解：
 * 1. 栈中的元素都是没有遇到大于它的元素，因为一旦后面的元素大于前面的元素就可以直接得出结果
 * 2. 如果遇到大于栈顶的元素，需要循环出掉所有小于当前元素的索引
 * 为什么存索引：因为需要计算距离，同时还需要知道当前的温度，存索引才能满足要求
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [], res = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (i && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const cur = temperatures[i];
            while (stack.length) {
                if (temperatures[stack[stack.length - 1]] >= cur) break;
                const temp = stack.pop();
                res[temp] = i - temp;
            }
        }
        stack.push(i);
    }
    return res;
};