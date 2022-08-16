/**
 * thirt-six: 剑指 Offer 36. 二叉搜索树与双向链表
 * 解题思路：
 * 1. 中序遍历
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// var treeToDoublyList = function(root) {
//     let head, next, pre;

//     function recur (root) {
//         if (!root) return;
//         pre = root;
//         recur(root.left);
//         if (!head) {
//             head = next = root;
//         } else {
//             pre = next;
//             next.right = root;
//             next = next.right;
//             next.left = pre;
//             pre = next;
//         }
//         recur(root.right);
//     }
//     recur(root);
//     if (pre && head) {
//         pre.right = head;
//         head.left = pre;
//     }
//     return head;
// };

/**
 * 1. 中序遍历简化版
 * @param {Node} root
 * @return {Node}
 */
function treeToDoublyList (root) {
    if (!root) return null;
    let head, pre;

    function recur (root) {
        if (!root) return;
        recur(root.left);
        if (pre) pre.right = root;
        else head = root;
        root.left = pre;
        pre = root;
        recur(root.right);
    }

    recur(root);
    head.left = pre;
    pre.right = head;
    return head;
}