/**
 * two: 两数相加
 * 解题思路：
 * 1. 直接按照链表的顺序进行相加，时间复杂度：O(n) 空间复杂度：O(n)
 * 官方解答称作为模拟
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sumNode = new ListNode(0, null);
    const result = sumNode;
    let carry = 0;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        sumNode.val = sum % 10;
        carry = Math.floor(sum / 10);
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
        if (l1 || l2) {
            const next = new ListNode(0, null);
            sumNode.next = next;
            sumNode = sumNode.next
        }
    }
    if (carry) {
        sumNode.next = new ListNode(carry, null);
    }
    return result;
};
