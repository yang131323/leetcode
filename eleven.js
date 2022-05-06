/**
 * 解题思路：
 * 1. 计算所有可能，当前值和目前的最大值compare（暴力求解）
 * 2. 使用双指针（头尾），刚开始宽最大，如果要大于第一个，只能高变大，慢慢移动头尾指针
 */

/**
 * 1. 暴力求解超时
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height = []) {
//     let result = 0;
//     const len = height.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             const h = Math.min(height[i], height[j]);
//             const area = h * (j - i);
//             if (area > result) result = area;
//         }
//     }
//     return result;
// };

/**
 * 2. 双指针
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height = []) {
//     const len = height.length;
//     let start = 0;
//     let end = len - 1;
//     let sIndex = 0;
//     let eIndex = len - 1;
//     let result = Math.min(height[start], height[end]) * (end - start);
//     if (height[start] > height[end]) {
//         eIndex -= 1;
//         end = eIndex;
//     } else {
//         sIndex += 1;
//         start = sIndex;
//     }
//     for (let i = sIndex; i < end;) {
//         for (let j = eIndex; j > start;) {
//             start = i;
//             end = j;
//             const area = Math.min(height[start], height[end]) * (j - i);
//             if (area > result) result = area;
//             if (height[start] > height[end]) {
//                 end = --j;
//             } else {
//                 start = ++i;
//             }
//         }
//     }
//     return result
// };

/**
 * 2. 双指针
 * @param {number[]} height
 * @return {number}
 */
function maxArea (height = []) {
    let l = 0;
    let r = height.length - 1;
    let result = 0;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        if (area > result) result = area;
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return result;
}