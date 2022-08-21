/**
 * seventy-five：75. 颜色分类
 * 解题思路：
 * 1. 排序：需要手动实现 - 快排
 * 2. 三路快排（只有三种数，1往中间靠，2往后靠）
 */

function swap (arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


/**
 * 1. 排序：需要手动实现 - 快排
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     function quickSort (l = 0, r = nums.length - 1) {
//         if (r <= l) return;
//         const t = l + Math.floor(Math.random() * (r - l + 1));
//         swap(nums, l, t);
//         let p1 = l + 1, p2 = r;
//         while (p1 <= p2) {
//             while (nums[p1] < nums[l]) p1++;
//             while (nums[p2] > nums[l]) p2--;
//             if (p1 > p2) break;
//             swap(nums, p1, p2);
//             p1++;
//             p2--;
//         }
//         swap(nums, l, p2);
//         quickSort(l, p2 - 1);
//         quickSort(p2 + 1, r);
//     }

//     quickSort()
//     return nums;
// };

/**
 * 2. 三路快排
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors (nums) {
    if (nums.length < 2) return nums;
    let len = nums.length, l = -1, r = len;
    for (let i = 0; i < r; i++) {
        if (nums[i] == 0) swap(nums, ++l, i);
        else if (nums[i] == 2) {
            swap(nums, --r, i);
            i--;
        }
    }
    return nums;
}