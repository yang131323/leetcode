/**
 * eleven: 剑指 Offer 11. 旋转数组的最小数字
 * 解题思路：
 * 投机取巧方式：使用语言自带的min工具函数
 * 1. 找到旋转点，就能找到最小值
 */

/**
 * 1. 找到旋转点，就能找到最小值
 * 思路：
 * 理论上应该是递增的，如果遇到突然递减的，这个转折点就是最小值出处，如果是递增的，那将会遍历整个数组
 * 特殊情况：
 * 1. 遍历完所有元素没有找到转折点有两种情况：
 *  1.1 这个数组是一个递增的
 *  1.2 这时数组所有元素都是相同的
 * 上面这两种情况在遍历完数组后直接返回第一个元素就行
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if (numbers.length === 1) return numbers[0];
    if (numbers.length === 2) return Math.min(...numbers);
    for (let i = 1, len = numbers.length; i < len; i++) {
        if (numbers[i] < numbers[i - 1]) return numbers[i];
        // if (numbers[i] === numbers[i - 1] && numbers[i - 1] === numbers[len - 1] && numbers[i] === numbers[0]) return numbers[i];
    }
    return numbers[0];
};