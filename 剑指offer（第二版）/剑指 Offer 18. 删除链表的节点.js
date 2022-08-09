/**
 * eighteen: 剑指 Offer 18. 删除链表的节点
 * 解题思路：
 * 1. 遍历链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 边界情况：
 * 1. 第一就匹配
 * 2. 没有一个匹配
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if (head.val == val) return head.next;
    let next = head;
    while (next) {
        const n = next.next;
        if (n && (n.val == val)) {
            const temp = n.next;
            next.next = temp;
            break;
        }
        next = next.next;
    }
    return head;
};