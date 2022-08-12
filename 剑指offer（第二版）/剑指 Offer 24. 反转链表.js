/**
 * twenty four: 剑指 Offer 24. 反转链表
 * 解题思路：
 * 1. 使用队列存储每个节点，然后出栈拼接
 * 2. 双指针
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1. 使用队列存储每个节点，然后出栈拼接
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     const nodes = [];
//     // 解链
//     while (head) {
//         const next = head.next;
//         nodes.push(head);
//         head.next = null;
//         head = next;
//     }
//     let next;
//     if (nodes.length) head = next = nodes.pop();
//     // 链接节点
//     while (nodes.length) {
//         next.next = nodes.pop();
//         next = next.next;
//     }
//     return head;
// };

/**
 * 2. 双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList (head) {
    let pre = null;
    while (head) {
        const node = head.next;
        head.next = pre;
        pre = head;
        head = node;
    }
    return pre;
}
