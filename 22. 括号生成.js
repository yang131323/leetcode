/**
 * twenty-two: 括号生成
 * 解题思路：
 * n对括号 => 表示有2n个字符
 * 每个字符都有两种选择(|)，可以看出来这是一个二叉树，只是这颗二叉树的部分结果可能不满足条件
 * 左括号存在条件：剩余左括号数 > 0
 * 右括号存在条件：剩余右扩数 > 剩余左扩数
 * 1. 暴力：遍历整颗二叉树，判断每个结果是否满足要求
 * 2. 遍历二叉树 + 剪枝
 */

/**
 * 深搜 + 剪枝
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//     const result = [];
//     dfs('', n, n, result);
//     return result;
// };

// function dfs (str, lNum, rNum, result) {
//     if (lNum == 0 && rNum == 0) {
//         result.push(str);
//         return;
//     }
//     if (lNum > 0) {
//         dfs(str + '(', lNum - 1, rNum, result);
//     }
//     if (rNum > lNum) {   
//         dfs(str + ')', lNum, rNum - 1, result);
//     }
// }

/**
 * 广搜 + 剪枝
 * @param {*} n 
 * @returns 
 */
function generateParenthesis (n) {
    const result = [];
    const queue = [{
        left: n,
        right: n,
        str: '',
    }];
    while (queue.length) {
        const { left, right, str } = queue.pop();
        if (!left && !right) {
            result.push(str);
            continue;
        }
        if (left > 0) {
            queue.unshift({
                left: left - 1,
                right,
                str: str + '(',
            })
        }
        if (right > left) {
            queue.unshift({
                right: right - 1,
                left, 
                str: str + ')'
            })
        }
    }
    return result;
}