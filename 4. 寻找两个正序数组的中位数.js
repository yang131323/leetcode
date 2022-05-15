/**
 * four: 寻找两个正序数组的中位数
 * 1. 双指针移动，每个数组一个指针，找到到中间那个值或者两个值的平均值，时间复杂度：O(m + n)
 * 2. 二分法查找 O(log(m + n))
 */

/**
 * 1. 双指针移动
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortednumsays = function (nums1, nums2) {
//     let n1 = 0, n2 = 0;
//     const nLen1 = nums1.length;
//     const nLen2 = nums2.length;
//     const len = nLen1 + nLen2;
//     const middle = Math.ceil(len / 2);
//     const isOdd = len % 2 != 0;
//     const result = []
//     while (true) {
//         if (isOdd && result.length == middle) break;
//         if (!isOdd && result.length == middle + 1) break;
//         if (n1 >= nLen1) {
//             result.push(nums2[n2++])
//         } else if (n2 >= nLen2) {
//             result.push(nums1[n1++])
//         } else if (nums1[n1] > nums2[n2]) {
//             result.push(nums2[n2++])
//         } else {
//             result.push(nums1[n1++])
//         }
//     }
//     const rLen = result.length;
//     return isOdd ? result[rLen - 1] : (result[rLen - 1] + result[rLen - 2]) / 2;
// };

/**
 * 2. 二分查找
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays (nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const len = len1 + len2;
    const middle = Math.ceil(len / 2);
    if (len % 2 == 0) {
        return (getNIndexNum(nums1, nums2, middle) + getNIndexNum(nums1, nums2, middle + 1)) / 2;
    } else {
        return getNIndexNum(nums1, nums2, middle);
    }
}

function getNIndexNum (nums1, nums2, k) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    // const len = len1 + len2;
    let ind1 = 0, ind2 = 0;
    while (true) {
        if (ind1 >= len1) {
            return nums2[ind2 + k - 1];
        } else if (ind2 >= len2) {
            return nums1[ind1 + k - 1];
        } else if (k == 1) {
            return Math.min(nums1[ind1], nums2[ind2]);
        }
        const nextInd1 = Math.min(ind1 + Math.floor(k / 2) - 1, len1 - 1);
        const nextInd2 = Math.min(ind2 + Math.floor(k / 2) - 1, len2 - 1);
        if (nums1[nextInd1] > nums2[nextInd2]) {
            k -= nextInd2 - ind2 + 1;
            ind2 = nextInd2 + 1;
        } else {
            k -= nextInd1 - ind1 + 1;
            ind1 = nextInd1 + 1;
        }
    }
}
