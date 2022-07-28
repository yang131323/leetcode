/**
 * sixty three: 剑指 Offer 63. 股票的最大利润
 * 解题思路：
 * 1. 动态规划：比较n - 1天获得最大利润和n天获得的最大利润，就是n天的最大利润
 */

/**
 * 1. 动态规划
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, price = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let ben = prices[i] - price;
        if (ben >= 0) max = Math.max(ben, max);
        if (prices[i] < price) {
            price = prices[i];
        };
    }
    return max;
};