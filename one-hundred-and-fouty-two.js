/**
 * 解题思路
 * 1. 使用set或者map存储链表节点，第一个与set或者map匹配的剑店就是结果
 */

/**
 * set方法
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     const set = new Set;
//     while (head) {
//         if (set.has(head)) return head;
//         set.add(head);
//         head = head.next;
//     }
//     return null;
// };

/**
 * 快慢指针方法
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle (head) {
    if (!head || !head.next || !head.next.next) return null;
    let fast = head.next.next;
    let slow = head.next;
    while (fast) {
        if (fast === slow) break;
        if (!fast || !fast.next || !fast.next.next) return null;
        slow = slow.next;
        fast = fast.next.next;
    }
    while (head) {
        if (head == slow) return head;
        head = head.next;
        slow = slow.next;
    }
}