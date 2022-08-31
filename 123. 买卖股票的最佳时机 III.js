/**
 * one hundred and twenty three: 123. 买卖股票的最佳时机 III
 * 解题思路：
 * 1. 动态规划
 * 2. 每天都模拟所有情况：第一次买、第一次卖、第二次买、第二次卖
 */

/**
 * 1. 动态规划
 * 动态转移数组：dp[i天][持股状态][交易次数]
 * 每天可能有六种情况：
 * 1. 今天未持股，也没进行交易，dp[i][0][0] = 0
 * 2. 今天未持股，进行过一次交易，可能是今天交易，也可能是以前交易一次，dp[i][0][1] = max(dp[i - 1][1][0] + prices[i], dp[i - 1][0][1])
 * 3. 今天未持股，进行过两次交易，有可能今天交易过一次，之前交易过一次；也可能之前交易过两次，dp[i][0][1] = max(dp[i - 1][1][1] + prices[i], dp[i - 1][0][2])
 * 4. 今天持股，没进行交易，可能今天买的；也可能是之前买的，dp[i][1][0] = max(dp[i - 1][1][0], dp[i - 1][0][0]-prices[i])
 * 5. 今天持股，进行过一次交易，可能今天买的；也可能是之前买的，dp[i][1][1] = max(dp[i - 1][1][1], dp[i -1][0][1] - prices[i])
 * 6. 今天持股，进行过两次交易，因为最多只能进行两次交易，因此这种情况不存在
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     const len = prices.length, dp = Array(len);
//     for (let i = 0; i < len; i++) {
//         dp[i] = [[], []];
//     }
//     // 第一天 未持股 未交易
//     dp[0][0][0] = 0;
//     // 第一天 未持股 交易一次 不存在
//     dp[0][0][1] = -Infinity;
//     // 第一天 未持股 交易两次 不存在
//     dp[0][0][2] = -Infinity;
//     // 第一天 持股 未交易
//     dp[0][1][0] = -prices[0];
//     // 第一天 持股 交易一次 不存在
//     dp[0][1][1] = -Infinity;
//     // 第一天 持股 交易两次 不存在
//     dp[0][1][2] = -Infinity;

//     for (let i = 1; i < len; i++) {
//         dp[i][0][0] = dp[i - 1][0][0];
//         dp[i][0][1] = Math.max(dp[i - 1][1][0] + prices[i], dp[i - 1][0][1]);
//         dp[i][0][2] = Math.max(dp[i - 1][1][1] + prices[i], dp[i - 1][0][2]);
//         dp[i][1][0] = Math.max(dp[i - 1][0][0] - prices[i], dp[i - 1][1][0]);
//         dp[i][1][1] = Math.max(dp[i - 1][0][1] - prices[i], dp[i - 1][1][1]);
//         dp[i][1][2] = -Infinity;
//     }
//     // 因为最多可以完成两次交易，所以最大值为两种情况的最大值
//     return Math.max(dp[len - 1][0][2], dp[len - 1][0][1], 0);
// };

/**
 * 2. 每天都模拟所有情况：第一次买、第一次卖、第二次买、第二次卖
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
    let firstBuy = -prices[0], firstSell = 0, secondBuy = -prices[0], secondSell = 0;
    for (let i = 0; i < prices.length; i++) {
        const fb = firstBuy, fs = firstSell, sb = secondBuy, ss = secondSell;
        firstBuy = Math.max(fb, 0 - prices[i]);
        firstSell = Math.max(fs, fb + prices[i]);
        secondBuy = Math.max(sb, fs - prices[i]);
        secondSell = Math.max(ss, sb + prices[i]);
    }
    return Math.max(firstBuy, firstSell, secondBuy, secondSell);
}