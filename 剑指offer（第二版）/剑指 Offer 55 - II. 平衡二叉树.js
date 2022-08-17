/**
 * fifty-five: 剑指 Offer 55 - II. 平衡二叉树
 * 解题思路：
 * 1. DFS - 对比左右深度
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    function recur (root) {
        if (!root) return 0;
        const left = recur(root.left);
        const right = recur(root.right);
        if (left === false || right === false || Math.abs(left - right) > 1) return false;
        return Math.max(left, right) + 1;
    }

    return recur(root) !== false
};