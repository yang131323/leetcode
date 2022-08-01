/**
 * fifty six: 剑指 Offer 56 - I. 数组中数字出现的次数
 * 解题思路：
 * 1. 异或（看题解）
 */

/**
 * 1. 异或
 * 详解：
 * 1. 这个题的简单版本就是只有一个出现一次的数字，其他所有数字都出现两次
 * 2. 有两个只出现一次的数字（x、y），说明x、y至少有一位不同（二进制）
 * 3. 先遍历整个数组得到所有数的异或，结果就是x、y的异或
 * 4. 找到x、y异或结果第一位为1的值，然后遍历数组和该位 & 的结果为0和非0分为两组，两组的异或结果值就是x、y
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let n = 0, f = 1, g1 = 0, g2 = 0;
    for (const num of nums) {
        n ^= num;
    }
    while (!(n & f)) f <<= 1;
    for (const num of nums) {
        if ((num & f)) {
            g1 ^= num;
        } else {
            g2 ^= num;
        }
    }
    return [g1, g2];
};