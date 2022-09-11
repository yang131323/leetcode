/**
 * three hundred fourty nine: 349. 两个数组的交集
 * 解题思路：
 * 1. 建立映射
 */

/**
 * 1. 建立映射
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = new Set(), set = new Set(nums1);
    
    for (const num of nums2) set.has(num) && res.add(num);

    return [...res];
};