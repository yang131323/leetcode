/**
 * fouty four: 剑指 Offer 44. 数字序列中某一位的数字
 * 解题思路：
 * 1. 推出规则 ，1的长度10、两位的长度90 * 2、三位的长度900 * 3
 */

/**
 * @param {number} n
 * @return {number}
 */
// var findNthDigit = function(n) {
//     if (!n) return n;
//     let num = 1, sum = 0;
//     while (sum < n) {
//         const temp = sum + 9 * Math.pow(10, num - 1) * num;
//         if (temp > n) break;
//         sum = temp;
//         num++;
//     }
//     n -= sum;
//     if (num == 1) return n;
//     let integer = Math.floor(n / num) - 1, mod = n % num, start = Math.pow(10, num - 1) + integer, next = start + 1;
//     return !mod ? (start = String(start))[start.length - 1] : String(next)[mod - 1];
// };

/**
 * 题解优化版
 * @param {number} n
 * @return {number}
 */
function findNthDigit (n) {
    /** digit：位数、count表示当前字符位数、start表示当前位数对应的数字 */
    let digit = 1, count = 9, start = 1;
    while (n > count) {
        n -= count;
        start *= 10;
        digit++;
        count = 9 * start * digit;
    }
    /**
     * 使用n-1是一个巧妙的做法：当能除尽，刚好实现 n / digit - 1，如果除不尽下一个数就是：n / digit，这样就不需要条件判断了
     * 另外一个好处就是取值也不需要条件判断了：除尽取最后一个(n - 1) % digit刚好是最后一个，除不尽余数从1开始，需要向前移一位
     */
    let num = start + Math.floor((n - 1) / digit);
    return String(num)[(n - 1) % digit];
}