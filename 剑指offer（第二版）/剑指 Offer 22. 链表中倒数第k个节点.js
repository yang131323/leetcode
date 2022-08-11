/**
 * twenty two: 剑指 Offer 22. 链表中倒数第k个节点
 * 解题思路：
 * 1. 两次遍历
 * 2. 一次遍历，入队列
 * 3. 双指针
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 2. 一次遍历，入队列
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var getKthFromEnd = function(head, k) {
//     let arr = [], root = head;
//     // if (!head) arr.push()
//     while (root) {
//         arr.unshift(root);
//         root = root.next;
//     }
//     return arr[k - 1];
// };

/**
 * 3. 双指针
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function getKthFromEnd (head, k) {
    let pS = head, pE = head;
    while (pE) {
        k ? k-- : (pS = pS.next);
        pE = pE.next;
    }
    return pS;
}