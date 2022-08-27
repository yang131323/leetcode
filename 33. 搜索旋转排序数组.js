/**
 * thirty three: 33. 搜索旋转排序数组
 * 解题思路：
 * 1. 暴力：遍历数组
 * 2. 找出分界点，二分
 */

/**
 * 1. 暴力
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let ans = -1
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target) return i;  
//     }
//     return ans;
// };

function binaryFind (nums, l, r, t) {
    let ans = - 1;
    while (l <= r) {
        mid = (l + r) >> 1;
        if (nums[mid] == t) {
            ans = mid;
            break;
        } else if (nums[mid] > t) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

/**
 * 2. 二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search (nums, target) {
    let ans = -1, len = nums.length, l = 0, r = len - 1, k;
    while (l <= r) {
        mid = (l + r) >> 1;
        if (nums[mid] == target) return mid;
        if (nums[mid] < nums[0]) {
            r = mid - 1;
        } else if (mid < len - 1 && nums[mid] > nums[mid + 1]) {
            k = mid;
            break;
        } else {
            l = mid + 1;
        }
    }
    if (k == null) {
        ans = binaryFind(nums, 0, len - 1, target);
    } else {
        ans = target >= nums[0] ? binaryFind(nums, 0, k, target) : binaryFind(nums, k + 1, len - 1, target);
    }
    return ans;
}