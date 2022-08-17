/**
 * twenty-six: 剑指 Offer 26. 树的子结构
 * 解题思路：
 * 1. 遍历两棵树
 */

/** 比较两棵树 */
function compareTree (r1, r2) {
    if (!r2) return true;
    if (!r1 || r1.val != r2.val) return false;
    return compareTree(r1.left, r2.left) && compareTree(r1.right, r2.right);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (!B && !A) return true;
    if (!A || !B) return false;
    return (A.val === B.val && compareTree(A, B)) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};