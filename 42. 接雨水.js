/**
 * forty-two: 42. 接雨水
 * 解题思路：
 * 只有当柱子呈现V型才能接住雨水，也就是只有柱子高度先递减再递增才能接雨水
 */

/**
 * 求每一列的能装多少水：左右找出最大值，然后用他们最小值减当前值（只有当前值小于等于最小值才减）
 * @param {number[]} height
 * @return {number}
 */
// function trap (heights) {
//     let result = 0, lMax = 0, rMax = 0;
//     for (let i = 1; i < heights.length; i++) {
//         if (!lMax) {
//             for (let j = 0; j < i; j++) {
//                 lMax = Math.max(heights[j], lMax);
//             }
//         }
//         if (rMax == heights[i] || !rMax) {
//             rMax = 0;
//             for (let j = i + 1; j < heights.length; j++) {
//                 rMax = Math.max(heights[j], rMax);
//             }
//         }
//         const limit = Math.min(rMax, lMax);
//         if (heights[i] < limit) {
//             result += limit - heights[i];
//         }
//         if (heights[i] > lMax) lMax = heights[i];
//     }
//     return result;
// }

/**
 * 动态规划版本
 * i左边界：max(maxLeft[i - 1], height[i - 1])
 * i右边界：max(maxRight[i + 1], height[i + 1])
 * i柱装水：min(maxRight[i], maxLeft[i]) - height[i]
 * result += i柱装的水
 * @param {*} heights 
 * @returns 
 */
// function trap (heights) {
//     let lMax = heights[0], result = 0;
//     const rMax = [], len = heights.length; 
//     for (let i = len - 1; i >= 0; i--) {
//         if (i == len - 1) {
//             rMax[i] = 0;
//             continue;
//         }
//         rMax[i] = Math.max(rMax[i + 1], heights[i + 1]);
//     }
//     for (let i = 1; i < len; i++) {
//         const limit = Math.min(lMax, rMax[i]);
//         if (limit > heights[i]) {
//             result += heights[i] >= limit ? 0 : limit - heights[i];
//         }
//         lMax = lMax >= heights[i] ? lMax : heights[i];
//     }
//     return result;
// }

/**
 * 双指针版本
 * 提示：双指针是按照递增的顺序移动的，所以移动的一方的值一定小于另一方的最大值
 * @param {*} heights 
 */
function trap (heights) {
    let len = heights.length, lMax = 0, rMax = 0, l = 0, r = len - 1, result = 0;
    while (l <= r) {
        if (heights[l] < heights[r]) {
            heights[l] > lMax ? (lMax = heights[l]) : (result += lMax - heights[l]);
            l++;
        } else {
            heights[r] > rMax ? (rMax = heights[r]) : (result += rMax - heights[r]);
            r--;
        }
    }
    return result;
}