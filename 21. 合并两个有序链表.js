/**
 * twenty one: 合并两个有序链表
 * 解题思路
 * 1. 暴力
 */

/**
 * 模拟合并过程
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let root = new ListNode(), result = root;
    while (list1 || list2) {
        if (!list1) {
            root.next = list2;
            break;
        } else if (!list2) {
            root.next = list1;
            break;
        } else if (list1.val < list2.val) {
            root.next = list1;
            list1 = list1.next;
            root = root.next;
            root.next = null;
        } else {
            root.next = list2;
            list2 = list2.next;
            root = root.next;
            root.next = null;
        }
    }
    return result.next;
};