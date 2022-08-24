/**
 * one hundred and sixteen: 116. 填充每个节点的下一个右侧节点指针
 * 解题思路：
 * 1. 层次遍历
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;
    let pre = root;
    while (pre.left) {
        let node = pre;
        // 处理层级关系
        while (node) {
            node.left.next = node.right;
            if (node.next) {
                node.right.next = node.next.left;
            }
            node = node.next
        }
        pre = pre.left;
    }
    return root;
};