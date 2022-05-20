/**
 * ninety-four: 二叉树的中序遍历
 * 解题思路：
 * 中序遍历：左 根 右的顺序遍历，可以使用深搜和广搜
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
 * 递归：dfs
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root, result = []) {
//     if (!root) return result;
//     root.left && inorderTraversal(root.left, result);
//     result.push(root.val);
//     root.right && inorderTraversal(root.right, result);
//     return result;
// };

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal (root) {
    const result = [], stack = [];
    if (!root) return result;
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            const node = stack.pop();
            result.push(node.val);
            root = node.right;
        }
    }
    return result;
}