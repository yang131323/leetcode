/**
 * six: 剑指 Offer 06. 从尾到头打印链表
 * 解题思路：
 * 1. 暴力求解， 时间复杂度：O(n)
 * 2. 递归
 */

/**
 * 1. 暴力求解
 * @param {ListNode} head
 * @return {number[]}
 */
// var reversePrint = function(head) {
//     let arr = [];
//     while (head) {
//         arr.unshift(head.val);
//         head = head.next;
//     }
//     return arr;
// };

/**
 * 2. 递归
 * @param {ListNode} head
 * @return {number[]}
 */
function reversePrint (head, result = []) {
    if (!head) return result;
    reversePrint(head.next, result);
    result.push(head.val);
    return result;
}