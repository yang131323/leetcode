/**
 * thirty-five: 剑指 Offer 35. 复杂链表的复制
 * 解题思路：
 * 1. 遍历两次、第一次建立节点列表、确定next指针，第二次从节点列表总确定random指针
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 1. 两次遍历
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function(head) {
//     if (!head) return null;
//     let arr = [], next = head, result = itera = new Node(0, null, null);
//     while (next) {
//         arr.push(next);
//         itera.val = next.val;
//         next.next && (itera.next = new Node(0, null, null));
//         itera = itera.next;
//         next = next.next;
//     }

//     next = head;
//     itera = result;
//     while (next) {
//         if (next.random != null) {
//             let idx = arr.findIndex(n => n == next.random);
//             let p1 = result;
//             while (--idx >= 0) p1 = p1.next;
//             itera.random = p1;
//         } else {
//             itera.random = null;
//         }
//         next = next.next;
//         itera = itera.next;
//     }

//     return result;
// };

/**
 * map方法
 * @param {*} head 
 * @returns 
 */
function copyRandomList (head) {
    if (!head) return null;
    let cur = head, map = new Map();
    while (cur) {
        map.set(cur, new Node(cur.val, null, null));
        cur = cur.next;
    }
    cur = head;
    while (cur) {
        const node = map.get(cur);
        node.random = !cur.random ? null : map.get(cur.random);
        node.next = cur.next ? map.get(cur.next) : null;
        cur = cur.next;
    }
    return map.get(head);
}