/**
 * two hundred and sixty eight：268. 丢失的数字
 * 解题思路：
 * 1. 双遍历，n长的数组
 * 2. 做差法
 * 3. 异或法
 */

/**
 * 1. 双遍历，n长的数组
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     let len = nums.length, flags = Array(len);
//     for (const num of nums) {
//         flags[num] = true;
//     }
//     for (let i = 0; i < len; i++) {
//         if (!flags[i]) return i;
//     }
//     return len;
// };

/**
 * 2. 做差法
 * 详情：
 * 1. 根据等差数列能够直接使用公式计算出和，然后一次遍历做差就能得出结果
 * @param {number[]} nums
 * @return {number}
 */
// function missingNumber (nums) {
//     let n = nums.length, sum = (n * (n + 1)) / 2;
//     for (const num of nums) sum -= num;
//     return sum;
// }

/**
 * 3. 异或法
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber (nums) {
    let res = 0;
    /** 先算出所有数字的异或值，然后和数组异或，得到的值就是缺失的 */
    for (let i = 1; i <= nums.length; i++) res ^= i;
    for (const num of nums) res ^= num;
    return res;
}