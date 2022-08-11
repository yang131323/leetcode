/**
 * sixty eight: 剑指 Offer 68 - II. 二叉树的最近公共祖先
 * 解题思路：
 * 1. 深度遍历，左右两个子树都找到的当前节点就是根节点
 */

/**
 * 需要考虑是否有重复的值
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root.val == p.val || root.val == q.val) return root;
    let left = null, right = null;
    root.left && (left = lowestCommonAncestor(root.left, p, q));
    root.right && (right = lowestCommonAncestor(root.right, p, q));
    return left && right ? root : (left || right);
};