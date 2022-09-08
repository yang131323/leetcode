/**
 * one hundred and fouty three: 143. 重排链表
 * 解题思路：
 * 1. 额外空间
 */
/**
 * 1. 额外空间
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let queue = [], next = head;
    // 存储所有节点， 目的是为了随机访问
    while (next) {
        queue.push(next);
        next = next.next;
    }
    let start = 0, end = queue.length - 1;
    while (start < end) {
        const s = queue[start];
        const e = queue[end];
        s.next = e;
        // 如果下一个元素是end元素，说明到终点了（节点为偶数的情况下）
        e.next = start + 1 < end ? queue[start + 1] : null;
        start++;
        end--;
    }
    // 为奇数的情况下，需要处理一下最后一个节点的next指向
    if (start == end) queue[start].next = null;
    return head;
};