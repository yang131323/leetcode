/**
 * fourty: 剑指 Offer 40. 最小的k个数
 * 解题思路：
 * 1. 排序 + 数组截断
 */

function swap (arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/**
 * 双路快排
 */
function quickSort (arr, l, r) {
    if (r <= l) return arr;
    const t = l + Math.floor(Math.random() * (r - l + 1));
    swap(arr, l, t);
    let p1 = l + 1, p2 = r;
    while (p1 <= p2) {
        while (arr[p1] < arr[l]) p1++;
        while (p1 <= p2 && arr[p2] > arr[l]) p2--;
        if (p1 > p2) break;
        swap(arr, p1++, p2--);
    }
    swap(arr, l, p2);
    if (l < p2) quickSort(arr, l, p2 - 1);
    if (r > p2) quickSort(arr, p2 + 1, r);
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    quickSort(arr, 0, arr.length - 1);
    return arr.slice(0, k);
};