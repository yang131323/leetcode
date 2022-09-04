/**
 * one thousand one hundred and ninety：1190. 反转每对括号间的子串
 * 解题思路：
 * 1. 使用栈模拟
 */

/**
 * 1. 使用栈模拟
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [], res = '';
    for (const char of s) {
        if (char == '(') {
            stack.push([]);
        } else if (stack.length && char != ')') {
            stack[stack.length - 1].push(char);
        } else if (stack.length && char == ')') {
            const childStr = stack.pop().reverse();
            const len = stack.length;
            if (len) {
                stack[len - 1] = stack[len - 1].concat(childStr);
            } else {
                res += childStr.join('');
            }
        } else if (!stack.length) {
            res += char;
        }
    }
    return res;
};