/**
 * one hundred and one: 101. 对称二叉树
 * 解题思路：
 * 1. dfs（相反对比左右两颗树）
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
 * 1. dfs（相反对比左右两颗树）
 * 详情：
 * 1. 使用深搜递归的比较左右两颗子树，对空节点单独处理
 * 2. 递归结束条件：左右子树都为空节点（说明对称）、剪枝：左右子树有一个子树不存在/左右子树多存在但是值不想等
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    function dfs (left, right) {
        if (!left && !right) return true;
        if (!left || !right || left.val != right.val) return false
        const l = dfs(left.left, right.right);
        const r = dfs(left.right, right.left);
        return l && r;
    }

    return !root || dfs(root.left, root.right)
};