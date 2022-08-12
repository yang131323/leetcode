/**
 * thirty two: 剑指 Offer 32 - III. 从上到下打印二叉树 III
 * 解题思路：
 * 1. bfs
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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     const queue = [], res = [];
//     let level = 1;
//     if (root) queue.push([root]);
//     while (queue.length) {
//         const cur = queue.pop();
//         const nodes = [];
//         const arr = [];
//         if (level % 2) {
//             while (cur.length) {
//                 const node = cur.shift();
//                 arr.push(node.val);
//                 node.left && nodes.unshift(node.left);
//                 node.right && nodes.unshift(node.right);
//             } 
//         } else {
//             while (cur.length) {
//                 const node = cur.shift();
//                 arr.push(node.val);
//                 node.right && nodes.unshift(node.right);
//                 node.left && nodes.unshift(node.left);
//             }
//         }
//         arr.length && res.push(arr);
//         nodes.length && queue.push(nodes);
//         level++;
//     }
//     return res;
// };

/**
 * 内存优化版
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder (root) {
    let queue = [], res = [];
    if (root) queue.push(root);
    while (queue.length) {
        const arr = [];
        const len = res.length;
        for (let i = queue.length - 1; i >= 0; i--) {
            const node = queue.shift();
            !(len % 2) ? arr.push(node.val) : arr.unshift(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(arr);
    }
    return res;
}