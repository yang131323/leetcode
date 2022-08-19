/**
 * fifty-five: 剑指 Offer 55 - I. 二叉树的深度
 * 解题思路：
 * 1. dfs
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1. dfs
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, deep = 0) {
    if (!root) return deep;
    return Math.max(maxDepth(root.left, deep + 1), maxDepth(root.right, deep + 1));
};