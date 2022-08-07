/**
 * twoty eight: 剑指 Offer 28. 对称的二叉树
 * 解题思路：
 * 1. 对比左右子树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    function recu (left, right) {
        if (!left && !right) return true;
        if (!left || !right || left.val != right.val) return false;
        return recu(left.left, right.right) && recu(left.right, right.left);
    }
    return recu(root.left, root.right);
};