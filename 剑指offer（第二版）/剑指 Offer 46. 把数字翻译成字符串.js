/**
 * fourty six: 剑指 Offer 46. 把数字翻译成字符串
 * 解题思路：
 * 1. 枚举法
 * 2. 动态规划：f(i) = f(i - 1) + f(i - 2)，有条件
 */

/**
 * 1. 枚举法
 * 详情：
 * 1. 每一次选择可以选择1位或者两位，然后判断这两种情况是否成立
 * 2. 然后递归这个过程
 * 特殊情况：
 * 组成两位如果第一位为0需要排除
 * @param {number} num
 * @return {number}
 */
// var translateNum = function(num) {
//     let result = 0, s = String(num), len = s.length;
//     function traveNum (str, idx = 0) {
//         if (idx >= len) return result++;
//         if (str[idx]) traveNum(str, idx + 1);
//         if (str[idx] != 0 && (str[idx] + str[idx + 1]) < 26) traveNum(str, idx + 2);
//     }
//     traveNum(s);
//     return result;
// };

/**
 * 1. 动态规划
 * @param {number} num
 * @return {number}
 */
function translateNum(num) {
    if (num == null) return;
    let l1 = 1, l2 = 1, m1 = num % 10, m2;
    while (num > 0) {
        num = Math.floor(num / 10);
        m2 = num % 10;
        const n = m2 * 10 + m1;
        const temp = (n >= 10 && n < 26) ? l1 + l2 : l2;
        l1 = l2;
        l2 = temp;
        m1 = m2;
    }
    return l2;
}