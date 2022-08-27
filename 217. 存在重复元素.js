/**
 * two-hundred-and-seventeen: 217. 存在重复元素
 * 解题思路：
 * 1. 暴力：排序 + 一次遍历
 * 2. map + 一次遍历
 */

/**
 * map + 一次遍历
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    for (const num of nums) {
        if (map[num]) return true;
        map[num] = 1;
    }
    return false;
};