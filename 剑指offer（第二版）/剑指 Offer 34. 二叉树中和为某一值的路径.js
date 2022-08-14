/**
 * thiry four: 剑指 Offer 34. 二叉树中和为某一值的路径
 * 解题思路：
 * 1. dfs
 * 2. dfs 先序遍历
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
 * 1. dfs
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
// var pathSum = function(root, target) {
//     let result = [];

//     function recur (root, sum = 0, left = 0) {
//         if (!root) return;
//         if (!root.left && !root.right) {
//             (sum + root.val) == target && result.push([root.val]);
//             return;
//         }
//         recur(root.left, sum + root.val, left);
//         recur(root.right, sum + root.val, result.length);
//         for (let i = left; i < result.length; i++) {
//             result[i].unshift(root.val);
//         }
//     }

//     recur(root);
//     return result;
// };


/**
 * 1. 先序遍历
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
function pathSum (root, target) {
    const result = [], path = [];

    function recur (root, tar) {
        if (!root) return;
        tar -= root.val;
        path.push(root.val);
        if (tar == 0 && !root.left && !root.right) {
            result.push([...path]);
        } else {
            recur(root.left, tar);
            recur(root.right, tar);
        }
        path.pop();
    }

    recur(root, target);
    return result;
}