/**
 * fourty six: 46. 全排列
 * 1. 构造树 - 遍历树
 */
/**
 * 1. 构造树
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, arr = [], result = []) {
    if (nums.length == 0) {
        result.push(arr);
        return result;
    }
    for (let i = 0; i < nums.length; i++) {
        permute([...nums.slice(0, i), ... nums.slice(i + 1)], [...arr, nums[i]], result);
    }
    return result
};