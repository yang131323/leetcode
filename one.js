/**
 * 解题思路：
 * 1. 暴力求解，遍历所有可能
 * 2. 双指针 + 空间
 * 3. 哈希表存结果值，计算结果取结果值
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums = [], target) {
//     const result = [];
//     let l = 0;
//     let r = nums.length - 1;
//     const arr = nums.map((num, index) => ({
//         n: num,
//         i: index
//     }));
//     arr.sort((a, b) => a.n - b.n);
//     while (l < r) {
//         if (arr[l].n + arr[r].n == target) {
//             result.push(arr[l].i, arr[r].i)
//             break;
//         } else if (arr[l].n + arr[r].n > target) {
//             r--;
//         } else {
//             l++;
//         }
//     }
//     return result;
// };

function twoSum (nums = [], target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const result = target - nums[i];
        if (numMap.has(result)) return [i, numMap.get(result)];
        numMap.set(nums[i], i);
    }
}
