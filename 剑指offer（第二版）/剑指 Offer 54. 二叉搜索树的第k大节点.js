/**
 * thirty four: 剑指 Offer 54. 二叉搜索树的第k大节点
 * 解题思路：
 * 1. 中序遍历二叉搜索树，构建数组直接返回
 */

/**
 * 1. 中序遍历
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    const result = [];

    function recur (root) {
        if (!root) return;
        recur(root.left);
        result.push(root.val);
        recur(root.right);
    }

    recur(root);
    return result[result.length - k];
};