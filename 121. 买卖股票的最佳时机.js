/**
 * one-hundred-and-twenty-one: 买卖股票的最佳时机
 * 解题思路：
 * 1. 暴力：求第i天买入，最多能赚多少钱，对比他们的最大值
 * 2. 第i天卖出能赚多少钱，记录股票前i天最低价
 */

/**
 * 暴力
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let result = 0;
//     const lMax = [], len = prices.length;
//     for (let i = len - 1; i >= 0; i--) {
//         if (i == len - 1) {
//             lMax[i] = 0;
//             continue;
//         }
//         lMax[i] = Math.max(lMax[i + 1], prices[i + 1]);
//     }
//     for (let i = 0; i < len - 1; i++) {
//         const earn = lMax[i] - prices[i];
//         result = Math.max(earn, result);
//     }
//     return result;
// };

/**
 * 2. 第i天卖出能赚多少钱，记录股票前i天最低价
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit (prices) {
    let result = 0, min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        result = Math.max(result, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return result;
}