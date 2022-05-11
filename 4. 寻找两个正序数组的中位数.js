/**
 * four: 寻找两个正序数组的中位数
 * 1. 双指针移动，每个数组一个指针，找到到中间那个值或者两个值的平均值
 */

/**
 * 1. 双指针移动
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n1 = 0, n2 = 0;
    const nLen1 = nums1.length;
    const nLen2 = nums2.length;
    const len = nLen1 + nLen2;
    const middle = Math.ceil(len / 2);
    const isOdd = len % 2 != 0;
    const result = []
    while (true) {
        if (isOdd && result.length == middle) break;
        if (!isOdd && result.length == middle + 1) break;
        if (n1 >= nLen1) {
            result.push(nums2[n2++])
        } else if (n2 >= nLen2) {
            result.push(nums1[n1++])
        } else if (nums1[n1] > nums2[n2]) {
            result.push(nums2[n2++])
        } else {
            result.push(nums1[n1++])
        }
    }
    const rLen = result.length;
    return isOdd ? result[rLen - 1] : (result[rLen - 1] + result[rLen - 2]) / 2;
};
