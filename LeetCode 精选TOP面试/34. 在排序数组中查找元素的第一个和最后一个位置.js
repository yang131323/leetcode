/**
 * thirty-four: 34. 在排序数组中查找元素的第一个和最后一个位置
 * 解题思路：
 * 1. 二分法
 */

/**
 * 1. 二分法 + 单调遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     function binaryFind (l, r) {
//         if (l == r && nums[l] == target) return l;
//         if (l >= r) return -1;
//         const mid = l + ((r - l) >> 1);
//         if (nums[mid] === target) return mid;
//         return nums[mid] < target ? binaryFind(mid + 1, r) : binaryFind(l, mid - 1);
//     }
//     const idx = binaryFind(0, nums.length - 1);
//     let res = [-1, -1], l = idx - 1, r = idx + 1;
//     if (idx < 0) return res;
//     while(l >= 0 && nums[l] === target) l--;
//     while(r < nums.length && nums[r] === target) r++;
//     res[0] = nums[l] == target ? l : l + 1;
//     res[1] = nums[r] == target ? r : r - 1;
//     return res;
// };

/**
 * 1. 二分法（两次）
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange (nums, target) {
    if (!nums.length) return [-1, -1];
    let res = [-1, -1], len = nums.length, l = 0, r = len - 1;
    while (l < r) {
        const mid = (r + l) >> 1;
        if (nums[mid] >= target) r = mid;
        else {
            l = mid + 1;
        }
    }
    if (nums[l] != target) return res;
    res[0] = l;
    l = 0, r = len - 1;
    while (l < r) {
        // 这里需要 + 1，为了和左边界区分，不然会陷入死循环
        const mid = (r + l + 1) >> 1;
        if (nums[mid] <= target) l = mid;
        else {
            r = mid - 1;
        }
    }
    res[1] = r;
    return res;
}