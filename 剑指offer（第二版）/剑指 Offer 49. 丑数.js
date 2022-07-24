/**
 * fourty nine: 剑指 Offer 49. 丑数
 * 解题思路：
 * 1. 动态规划：丑数源于2、3、5和某个因子的乘积，因此可以得到Xn = min(Xa * 2,Xb * 3 , Xc * 5)
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let a = b = c = 0, num = [1];
    for (let i = 1; i < n; i++) {
        const [ta, tb, tc] = [num[a] * 2, num[b] * 3, num[c] * 5];
        num[i] = Math.min(ta, tb, tc);
        if (ta == num[i]) a++;
        if (tb == num[i]) b++;
        if (tc === num[i]) c++;
    }
    return num[n - 1];
};