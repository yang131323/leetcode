/**
 * fourty three: 剑指 Offer 43. 1～n 整数中 1 出现的次数
 * 解题思路：
 * 1. 每位为1的数量根据三种情况计算（cur == 0、cur == 1、cur > 1）
 */

function countDigitOne (num) {
    let digit = 1, cur = num % 10, high = Math.floor(num / 10), low = 0, res = 0;
    while (cur || high) {
        if (cur == 0) res += high * digit;
        else if (cur == 1) res += high * digit + low + 1;
        else res += (high + 1) * digit;
        low = cur * digit + low;
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }
    return res;
}

