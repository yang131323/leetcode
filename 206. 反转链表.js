/**
 * two-hundred-and-six: 反转链表
 * 解题思路
 * 1. 链表的指向逆转
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     let copy = head;
//     while (copy) {
//         const temp = copy;
//         copy = copy.next;
//         if (temp != head) {
//             temp.next = head;   
//             head = temp;
//         } else {
//             head.next = null;
//         }
//     }
//     return head;
// };

function reverseList (head) {
    let pre = null;
    while (head) {
        const next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};
