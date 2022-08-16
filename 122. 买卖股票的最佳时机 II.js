/**
 * one hundred and twenty two: 122. 买卖股票的最佳时机 II
 * 解题思路：
 * 1. 遍历求出所有峰底和峰谷的差值
 */

/**
 * 1. 遍历求出所有峰底和峰谷的差值
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let min, benefit = 0;
    for (let i = 1; i < prices.length; i++) {
        // 求峰底
        if (prices[i] > prices[i - 1] && min == null) {
            min = prices[i - 1];
            continue;
        }
        // 求峰谷，股票价格不可能小于0
        if (prices[i] < prices[i - 1] && min != null) {
            benefit += (prices[i - 1] - min);
            min = null;
            continue;
        }
    }
    if (min != null) benefit += (prices[prices.length - 1] - min);
    return benefit;
};