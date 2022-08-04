/**
 * fifty thiry: 剑指 Offer 53 - II. 0～n-1中缺失的数字
 * 解题思路：
 * 1. 二分法
 * 2. 暴力
 */

/**
 * 1. 二分法
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//     const len = nums.length;
//     if (len == 1) return 0;
//     let l = 0, r = len - 1;
//     while (l <= r) {
//         const mid = l + ((r - l + 1) >> 1);
//         const cur = nums[mid];
//         if (cur === mid) {
//             l = mid + 1;
//         } else if (cur > mid) {
//             if (nums[mid - 1] != cur - 1) return cur - 1;
//             r = mid - 1;
//         }
//     }
    
//     return len;
// };

/**
 * 2. 暴力
 * @param {*} nums 
 * @returns 
 */
function missingNumber (nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] != i) return nums[i] - 1;
    }
    return len;
}

