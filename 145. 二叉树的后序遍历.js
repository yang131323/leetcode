/**
 * one-hundred-and-forty-five: 二叉树的后序遍历
 * 解题思路：
 * 1. 暴力
 * 2. 迭代
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root, result = []) {
    if (!root) return result;
    root.left && postorderTraversal(root.left, result);
    root.right && postorderTraversal(root.right, result);
    result.push(root.val);
    return result;
};