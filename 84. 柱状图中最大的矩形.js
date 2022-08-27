/**
 * eighty-four：84. 柱状图中最大的矩形
 * 
 */

/**
 * 超时
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     let max = 0, l = 0, r = 0;
//     for (let i = 0, len = heights.length; i < len; i++) {
//         while (--l >= 0) {
//             if (heights[l] < heights[i]) break;
//         }
//         while (++r < len) {
//             if (heights[r] < heights[i]) break;
//         }
//         max = Math.max((r - l - 1) * heights[i], max);
//     }
//     return max;
// };

/**
 * 优化版本
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea (heights) {
    const stack = [];
    const len = heights.length;
    let max = 0;
    if (len == 1) return heights.pop();
    for (let i = 0; i < len; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let width = i;
            const height = heights[stack.pop()];
            if (stack.length) {
                width = i - stack[stack.length - 1] - 1;
            }
            max = Math.max(max, width * height);
        }
        stack.push(i);
    }
    while (stack.length) {
        let width = len;
        let height = heights[stack.pop()];
        if (stack.length) {
            width = len - stack[stack.length - 1] - 1;
        }
        max = Math.max(max, height * width);
    }
    return max;
}