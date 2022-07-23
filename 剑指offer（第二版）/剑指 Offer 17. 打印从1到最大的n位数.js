/**
 * seventeen:  剑指 Offer 17. 打印从1到最大的n位数
 * 解题思路：
 * 1. 模拟
 */
/**
 * 1. 模拟
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let result = [];
    for (let i  = 1; i < 10 ** n; i++) {
        result.push(i);
    }
    return result;
};