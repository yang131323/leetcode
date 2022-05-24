/**
 * twenty six：删除有序数组中的重复项
 * 解题思路：
 * 1. 暴力，后面开始遍历
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (i != nums.length - 1 && nums[i] == nums[i + 1]) {
//             nums.splice(i + 1, 1)
//         }
//     }
//     return nums;
// };

/**
 * 题解版
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums) {
    if (!nums.length) return 0; 
    let head = 0, tail = 1;
    while (tail < nums.length) {
        if (nums[head] != nums[tail]) {
            head++;
            tail > head && (nums[head] = nums[tail]);
        }
        tail++;
    }
    return head + 1;
}