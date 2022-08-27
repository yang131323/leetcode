/**
 * one hundred twenty four: 124. 二叉树中的最大路径和
 * 解题思路：
 * 1. 暴力：遍历整棵树，每个节点判断：当前节点 + 左子树最大值、当前节点 + 右子树最大值、当前节点 + 左右子树最大值
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;
    function dfs (root) {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        const innerMax = left + root.val + right;
        max = Math.max(root.val, max, innerMax);
        const outputMax = root.val + Math.max(0, left, right);
        return Math.max(0, outputMax);
    }
    dfs(root);
    return max;
};