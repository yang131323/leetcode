/**
 * thiry two: 剑指 Offer 32 - II. 从上到下打印二叉树 II
 * 解题思路：
 * 1. bfs + 分层
 */

/**
 * 1. bfs
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if (!root) return [];
//     const res = [], queue = [{
//         node: root,
//         level: 0,
//     }];
//     while (queue.length) {
//         const { node, level } = queue.shift();
//         if (res[level]) {
//             res[level].push(node.val);
//         } else {
//             res.push([node.val]);
//         }
//         node.left && queue.push({ node: node.left, level: level + 1 });
//         node.right && queue.push({ node: node.right, level: level + 1 });
//     }
//     return res;
// };

/**
 * 1. bfs（内存优化版）
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder (root) {
    const res = [], queue = [];
    if (root) queue.push(root);
    while (queue.length) {
        res.push([]);
        const curIdx = res.length - 1;
        for (let i = queue.length - 1; i >= 0; i--) {
            const node = queue.shift();
            res[curIdx].push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return res;
}