/**
 * fourty three: 剑指 Offer 43. 1～n 整数中 1 出现的次数
 * 解题思路：
 * 1. 每位为1的数量根据三种情况计算（cur == 0、cur == 1、cur > 1）
 */

/**
 * 1. 
 * 题解：https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/mian-shi-ti-43-1n-zheng-shu-zhong-1-chu-xian-de-2/
 * 求每一位出现1的次数，可以将一个数字分为三部分：当前计算1的位（计为i）、计算位前面的所有位组成的数字（高位 height）、计算位后面的所有位组成的数字（地位 low）
 * 第i位1的数字等于高位（完整的位数）产生的产生的1 + 低位（就是地位的所有数字）产生的数字，具有以下三种情况：
 * 1. 第i位为0，就等于height * 10 ^ (i - 1)，原因为i位固定，低位有10 ^ (i - 1)种组合，高位每减1，i位就有0 - 9十种组合，高位能让i位出现1的可能情况位height种
 * 2. 高位产生的数量和第一种情况一样，主要是低位为任何值都满足，所以低位的所有的可能组合都满足，所以为：height * 10 ^ (i - 1) + low + 1，后面加1是因为从0开始
 * 3. 大于1说明i和低位能产生1的情况都包括了，所以直接在高位加1就行：(height+1) * 10 ^ (i - 1)
 * @param {*} num 
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

