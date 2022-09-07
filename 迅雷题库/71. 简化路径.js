/**
 * seventy one: 71. 简化路径
 * 解题思路：
 * 1. 模拟
 */

/**
 * 1. 模拟
 * 详情：
 * 1. 维护一个栈，如果出现..将前一个路径推出，如果遇到.当前路径不入栈
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [], s = '';

    function handlePath () {
        switch (s) {
            case '.':
                break;
            case '..':
                stack.pop();
                break;
            default:
                stack.push(s);
                break;
        }
    }

    for (let i = 0; i < path.length; i++) {
        if (path[i] == '/' && s) {
            handlePath();
            s = '';
        } else if (path[i] != '/') {
            s += path[i];
        }
    }
    
    s && handlePath();

    return '/' + stack.join('/');
};