/**
 * thirty two: 剑指 Offer 32 - I. 从上到下打印二叉树
 * 解题思路：
 * 1. 广度优先遍历
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1. 广度优先遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let result = [], queue = [root];
    while (queue.length) {
        const node = queue.shift();
        result.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
};