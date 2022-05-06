/**
 * 解题思路：
 * 1. 使用栈进行翻转
 * 2. 递归翻转
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function (head, k) {
//     const stack = [];
//     let pre = null;
//     let index = null;
//     function linkNode (isStack = true) {
//         while (stack.length) {
//             const top = isStack ? stack.pop() : stack.shift();
//             if (!pre) {
//                 pre = top;
//                 index = pre;
//             } else {
//                 pre.next = top;
//                 pre = pre.next;
//             }
//         }
//     }
//     while (head) {
//         if (stack.length == k) {
//             linkNode();
//         }
//         const next = head.next;
//         head.next = null;
//         stack.push(head);
//         head = next;
//     }
//     linkNode(stack.length == k);
//     return index;
// };


/**
 * 空间复杂度O(1)方式处理
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup (head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let tail = dummy;
    // tail = tail.next;
    function reverse (h) {
        let pre = null;
        while (h) {
            const next = h.next;
            h.next = pre;
            pre = h;
            h = next;
        }
        return pre;
    }
    while (tail) {
        for (let i = 0; i < k; i++) {
            if (!tail.next) return dummy.next;
            tail = tail.next;
        }
        console.log(tail);
        const start = pre.next;
        const next = tail.next;
        tail.next = null;
        pre.next = reverse(start);
        start.next = next;
        pre = start;
        tail = pre;
    }
    return dummy.next;
}
