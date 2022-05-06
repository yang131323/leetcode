/**
 * 解题思路
 * 1. 两两交换 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     let pre = null;
//     let index = null;
//     while (head) {
//         const next = head.next;
//         const nNext = next ? next.next : null;
//         next && (next.next = head);
//         if (next) {
//             next.next = head;
//             head.next = null;
//             !index && (index = next);
//             pre && (pre.next = next);
//         } else {
//             !index && (index = head);
//             pre && (pre.next = head);
//         }
//         pre = head;
//         head = nNext;
//     }
//     return index;
// };

/**
 * 递归处理
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs (head) {
    if (head == null || head.next == null) return head
    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
}
