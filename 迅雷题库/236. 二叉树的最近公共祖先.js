/**
 * two hundred and thirty six: 236. 二叉树的最近公共祖先
 * 解题思路：
 * 1. 遍历树，累计节点
 * 2. 先序遍历
 */

/**
 * 1. 遍历树，累计节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     function recu (root) {
//         if (!root) return false
//         let isRoot = false;
//         if (p != null && root.val == p.val) {
//             isRoot = true;
//             p = null;
//         }
//         if (q != null && root.val == q.val) {
//             isRoot = true;
//             q = null;
//         }
//         if (!p && !q) return true;
//         const left = recu(root.left);
//         const right = recu(root.right);
//         if (isRoot && (left || right) || (left && right)) return root;
//         return isRoot || left || right;
//     }

//     return recu(root);
// };

/**
 * 2. 先序遍历（不比较值，直接比较节点）
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor (root, p, q) {
    if (!root || root == p || root == q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
}