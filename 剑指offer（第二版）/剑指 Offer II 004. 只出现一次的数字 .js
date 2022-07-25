/**
 * four: 剑指 Offer II 004. 只出现一次的数字 
 * 解题思路：
 * 1. map记录次数
 * 2. 将数字转换成2进制，每位都是3的倍数，多余的就是只出现一次的数字
 */

/**
 * 1. map
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (!map[nums[i]]) {
//             map[nums[i]] = 1;
//             continue;
//         }
//         map[nums[i]]++;
//         if (map[nums[i]] === 3) delete map[nums[i]];
//     }
//     return Object.keys(map)[0];
// };

/**
 * 2. 累计每位二进制
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber (nums) {
    let res = 0;
    for (let i = 0;i < 32; i++) {
        let total = 0;
        for (const num of nums) {
            total += (num >> i) & 1;
        }
        if (total % 3) {
            res += (1 << i);
        }
    }
    return res;
}