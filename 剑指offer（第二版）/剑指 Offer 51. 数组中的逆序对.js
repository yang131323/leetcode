/**
 * fifty: 剑指 Offer 51. 数组中的逆序对
 * 解题思路：
 * 1. 暴力
 * 2. 归并排序（分而治之：分、并 —— 统计）
 */

/**
 * 1. 暴力
 * @param {number[]} nums
 * @return {number}
 */
// var reversePairs = function(nums) {
//     let num = 0, len = nums.length;
//     if (len <= 1) return 0;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (nums[j] < nums[i]) num++;
//         }
//     }
//     return num;
// };
/**
 * 1. 归并排序
 * @param {number[]} nums
 * @return {number}
 */
// function reversePairs (nums) {
//     let len = nums.length, num = 0;
//     if (len < 2) return num;

//     function mergeSort (arr, s = 0, e = len - 1) {
//         // 二分
//         const length = e - s + 1;
//         if (length <= 1) return [arr[s]];
//         const mid = s + (length >> 1);
//         // 左右子数组排序
//         const leftArr = mergeSort(arr, s, mid - 1);
//         const rightArr = mergeSort(arr, mid, e);
//         // 合并
//         let sortArr = [];
//         while (leftArr.length || rightArr.length) {
//             if (!leftArr.length || !rightArr.length) {
//                 !leftArr.length ? sortArr.push(...rightArr) : sortArr.push(...leftArr);
//                 break;
//             }
//             if (leftArr[0] <= rightArr[0]) {
//                 sortArr.push(leftArr.shift());
//             } else {
//                 sortArr.push(rightArr.shift());
//                 num += leftArr.length;
//             }
//         }

//         return sortArr;
//     }

//     mergeSort(nums);
//     return num;
// }

/**
 * 1. 归并排序（内存优化版）
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs (nums) {
    let temp = [], len = nums.length, num = 0;
    if (len < 2) return num;

    function mergeSort (s = 0, e = len - 1) {
        if (e <= s) return nums;
        const mid = s + ((e - s + 1) >> 1);
        // 这里索引从0开始，所以应该-1
        mergeSort(s, mid - 1);
        mergeSort(mid, e);
        for (let k = s; k <= e; k++) temp[k] = nums[k];
        let l = s, r = mid;
        for (let k = s; k <= e; k++) {
            // 前部分已经处理完毕
            if (l === mid) {
                nums[k] = temp[r++];
            // 后半部分处理完毕和
            } else if (r > e || temp[l] <= temp[r]) {
                nums[k] = temp[l++];
            } else if (temp[r] < temp[l]) {
                nums[k] = temp[r++];
                num += (mid - l);
            }
        }
    }

    mergeSort();
    return num;
}