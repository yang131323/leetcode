/**
 * fifty six: 剑指 Offer 56 - II. 数组中数字出现的次数 II
 * 解决方案：
 * 1. 计算每位二进制出现的次数，对3进行取余，剩下的就是数字
 * 2. map计数
 */

/**
 * 1. 计算每位二进制出现的次数
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let binArr = Array(32).fill(0);
//     for (const num of nums) {
//         for (let i = 0; i < 32; i++) {
//             if (num & (1 << i)) binArr[i]++;
//         }
//     }
//     let ;
//     for (let i = 0; i < 32; i++) {
//         if (binArr[i] % 3) res += 1 << i;
//     }
//     return res;
// };

/**
 * 1. 计算每位二进制出现的次数（优化版）
 * @param {number[]} nums
 * @return {number}
 */
// function singleNumber (nums) {
//     let res = 0, bin, binNum = 0;
//     for (let i = 0; i < 32; i++) {
//         bin = 0;
//         cur = 1 << i;
//         for (const num of nums) {
//             if (num & cur) bin++;
//         }
//         if (bin %= 3) res += cur;
//     }
//     return res;
// }

/**
 * 2. map计数
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber (nums) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
        if (map.get(num) % 3 === 0) map.delete(num);
    }
    let res = 0;
    for (const [key, val] of map) {
        res = key;
        break;
    }
    return res;
}