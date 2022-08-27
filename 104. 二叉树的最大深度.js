/**
 * one hundred four: 104. 二叉树的最大深度
 * 解题思路：
 * 1. 暴力：遍历整颗树
 */

/**
 * 1. 暴力
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    function dfs (root, level) {
        if (!root) return
        max = Math.max(max, level);
        root.left && dfs(root.left, level + 1);
        root.right && dfs(root.right, level + 1);
    }
    dfs(root, 1);
    return max;
};