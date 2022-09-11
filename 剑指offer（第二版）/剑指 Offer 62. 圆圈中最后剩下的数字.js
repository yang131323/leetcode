/**
 * sixty two: 剑指 Offer 62. 圆圈中最后剩下的数字
 * 解题思路：约瑟夫环问题
 * 1. 暴力，构建链表
 * 2. 数学方式（https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/javajie-jue-yue-se-fu-huan-wen-ti-gao-su-ni-wei-sh/）
 */

/**
 * 解法：
 * 1. 最后剩下的元素索引为0，拼接长度为m元素，计算(0 + 3) % 2，得到倒数第二轮元素的位置，然后以此类推
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i;
    }
    return res;
};