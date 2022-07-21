/**
 * fifteen: 剑指 Offer 15. 二进制中1的个数
 * 解题思路：
 * 1. 与2的0次方到2的32次方进行与运算，如果为1当前位就是1
 * 2. 巧用n & n - 1
 */

/**
 * 1. 与2的0次方到2的32次方进行与运算，如果为1当前位就是1
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     let num = 0, e = 1;
//     while (n > 0) {
//         if ((e & n) === 1) num++;
//         n >>>= 1;
//     }
//     return num;
// };

/**
 * 2. 巧用n & n - 1
 * @param {number} n - a positive integer
 * @returns {number}
 */
function hammingWeight (n) {
    let num = 0;
    while (n != 0) {
        num++;
        n &= n - 1;
    }
    return num;
}