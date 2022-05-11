/**
 * twenty：有效的括号
 * 1. 栈匹配: 硬编码
 * 2. 栈 + map
 */

const map = {
    '(': ')',
    '[': ']',
    '{': '}'
}

/**
 * 栈匹配
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else if (s[i] !== stack.pop()) {
            return false
        }
    }
    return !stack.length
};
