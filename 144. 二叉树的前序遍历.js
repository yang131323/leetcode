/**
 * one-hundred-and-forty-four: 二叉树的前序遍历
 * 解题思路
 * 1. 递归：暴力求解
 */

/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root, result = []) {
//     if (!root) return result;
//     result.push(root.val);
//     root.left && preorderTraversal(root.left, result);
//     root.right && preorderTraversal(root.right, result);
//     return result;
// };

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal (root) {
    const result = [], stack = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            result.push(root.val);
            root = root.left;
        } else {
            const node = stack.pop();
            root = node.right;
        }
    }
    return result;
}