/**
 * one-hundred-and-thirty-six: 136. 只出现一次的数字
 * 解题思路：
 * 1. 将所有值进行异或，最后得到的值就是只出现一次的值
 * 2. map记录：第一次添加，第二次移除，最后只剩下一个key
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};