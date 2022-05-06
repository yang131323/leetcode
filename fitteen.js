/**
 * 解题思路
 * 1. 暴力求解：排列组合，遍历所有可能，去重
 */

/**
 * 1. 暴力求解
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums = []) {
//     nums.sort((a, b) => a - b);
//     const index = nums.findIndex(num => num > 0);
//     const len = nums.length - 1;
//     let result = [];
//     for (let i = 0; i < index; i++) {
//         if (i > 0 && nums[i] == nums[i - 1]) continue;
//         for (let j = len; j >= index; j--) {
//             if (j < len && nums[j] == nums[j + 1]) continue;
//             const t = 0 - nums[i] - nums[j];
//             if (t > 0) {
//                 for (let k = j - 1; k >= index; k--) {
//                     if (nums[k] < t) break;
//                     if (nums[k] == t) {
//                         result.push([nums[i], nums[j], t]);
//                         break;
//                     }
//                 }
//             } else {
//                 for (let k = i + 1; k < index; k++) {
//                     if (nums[k] > t) break;
//                     if (nums[k] == t) {
//                         result.push([nums[i], nums[j], t]);
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     if (nums.filter(num => !num).length >= 3) {
//         result.push([0, 0, 0]);
//     }
//     return result;
// };

/**
 * 2. 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums = []) {
    const result = [];
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let l = 0, r = len - 1;
    // if (nums.length < 3) return result;
    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        l = i + 1;
        r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (l > i + 1 && nums[l] == nums[l - 1]) {
                l++;
            } else if (nums[r] == nums[r + 1]) {
                r--;
            } else if (sum == 0) {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
            } else if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            }
        }
    }
    return result;
}
