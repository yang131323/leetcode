/**
 * twenty five: 剑指 Offer 25. 合并两个排序的链表
 * 解题思路：
 * 1. 按照顺序递归
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = next = new ListNode();
    while (l1 || l2) {
        if (!l1 || !l2) {
            next.next = l1 ? l1 : l2;
            break;
        } else if (l1.val <= l2.val) {
            const node = l1.next;
            next.next = l1;
            next = next.next;
            l1 = node;
        } else {
            const node = l2.next;
            next.next = l2;
            next = next.next;
            l2 = node;
        }
        next.next = null;
    }
    return res.next;
};