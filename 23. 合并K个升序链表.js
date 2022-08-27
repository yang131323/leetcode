/**
 * twenty-three: 23. 合并K个升序链表
 * 解题思路：
 * 1. 暴力
 */

/**
 * 暴力
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function(lists) {
//     let root = new ListNode(), result = root;
//     while (lists.length) {
//         let minNode;
//         if (lists.length == 1) {
//             root.next = lists[0];
//             break;
//         }
//         for (let i = lists.length - 1; i >= 0; i--) {
//             const node = lists[i];
//             if (!node) {
//                 lists.splice(i, 1);
//                 continue;
//             }
//             if (!minNode || minNode.val > node.val) {
//                 minNode = node;
//             }
//         }
//         if (minNode) {
//             root.next = minNode;
//             root = root.next;
//             lists.some((node, index) => {
//                 if (node != minNode) return
//                 lists[index] = node.next;
//             });
//             root.next = null;
//         }
//     }
//     return result.next;
// };

function mergeLists (aList, bList) {
    let head = new ListNode(), result = head;
    while (aList || bList) {
        if (!aList || !bList) {
            head.next = !aList ? bList : aList;
            break;
        } else if (aList.val < bList.val) {
            head.next = aList;
            aList = aList.next;
        } else {
            head.next = bList;
            bList = bList.next;
        }
        head = head.next;
        head.next = null;
    }
    return result.next;
}


/**
 * 题解版
 * @param {*} lists 
 */
function mergeKLists (lists) {
    let ans;
    for (const list of lists) {
        ans = mergeLists(ans, list);
    }
    return ans;
}