/**
 * two hundred and four: 204. 计数质数
 * 解题思路：
 * 1. 遍历，突破点在判断数是质数
 */

/**
 * 1. 遍历
 * 详情：
 * 1. 如果对每一个数都判断进行一遍质数判断效率会比较低，因此采用一个标志数组，当一个数是质数时，它的k倍一定不是质数
 *    这样能够筛选掉后面很多数，避免做一些无谓的计算
 * 2. 遍历范围可以控制在sqrt(n)，因为因子是成对的，一前一后
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let flags = Array(n), count = 0;
    for (let i = 2; i * i < n; i++) {
        if (flags[i]) continue;
        for (let j = i * i; j < n; j+= i) {
            flags[j] = true;
        }
    }
    for (let i = 2; i < n; i++) {
        if (!flags[i]) count++;
    }
    return count;
};