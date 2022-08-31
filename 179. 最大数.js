/**
 * one hundred and seventy nine: 179. 最大数
 * 解题思路：
 * 1. 排序
 */

/**
 * 1. 排序
 * 细节：因为没法直观的比较两个那个数字在前组成的数字最大，因此直接比较两个数字按照不同顺序拼接的大小
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let ab = `${a}${b}`;
        let ba = `${b}${a}`;
        return ab - ba > 0 ? -1 : 1;
    });
    return nums.join('').replace(/^0+$/, '0');
};