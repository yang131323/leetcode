/**
 * 解题思路：
 * 1. 使用set或者map存储每个节点，然后判断遍历到的节点是否在set和map中
 * 2. 使用快慢指针
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     const set = new Set();
//     while (head) {
//         if (set.has(head)) return true;
//         set.add(head)
//         head = head.next;
//     }
//     return false;
// };

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle (head) {
    if (!head || !head.next || !head.next.next) return false;
    let tHead = head.next.next;
    head = head.next;
    while (tHead) {
        if (tHead === head) return true;
        head = head.next;
        const tNext = tHead.next;
        tHead = !tNext ? null : tNext.next;
    }
    return false;
}
