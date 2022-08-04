/**
 * sixty: 剑指 Offer 67. 把字符串转换成整数
 * 解题思路：
 * 1. 模拟过程
 */

const max = 2 ** 31 - 1;
const min = - (2 ** 31);

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    str = str.trim();
    let res = 0, flag = true;
    for (let i = 0; i < str.length; i++) {
        if (!i) {
            /** 第一个字符不符合规范 */
            if (!/[\d\+-]/.test(str[0])) return 0;
            if (/\+|-/.test(str[0])) {
                flag = str[0] == '-' ? -1 : 1;
            } else {
                res = +str[0];
            }
            continue;
        }
        /** 是整数所以不用考虑小数点 */
        if (!/\d/.test(str[i])) break;
        res = res * 10 + (+str[i]) * flag;
        if (res > max) return max;
        if (res < min) return min;
    }
    return res;
};
