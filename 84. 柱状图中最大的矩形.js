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
// function largestRectangleArea (heights) {
//     const stack = [];
//     const len = heights.length;
//     let max = 0;
//     if (len == 1) return heights.pop();
//     for (let i = 0; i < len; i++) {
//         while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
//             let width = i;
//             const height = heights[stack.pop()];
//             if (stack.length) {
//                 width = i - stack[stack.length - 1] - 1;
//             }
//             max = Math.max(max, width * height);
//         }
//         stack.push(i);
//     }
//     while (stack.length) {
//         let width = len;
//         let height = heights[stack.pop()];
//         if (stack.length) {
//             width = len - stack[stack.length - 1] - 1;
//         }
//         max = Math.max(max, height * width);
//     }
//     return max;
// }

/**
 * 单调队列重做版本
 * @param {*} nums 
 * @returns 
 */
function largestRectangleArea (nums) {
    let stack = [], max = 0, len = nums.length;
    for (let i = 0; i < len; i++) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            const idx = stack.pop();
            /** 
             * 如果前面没有元素，代表区间起始位置从0开始；如果前面有索引位置也不能使用i - 当前索引
             * 因为中间可能有元素已经被计算，所以可能会导致元素跳动
             */
            const width = !stack.length ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, width * nums[idx])
        }
        // 它是一个递增序列
        stack.push(i);
    }
    while (stack.length) {
        const idx = stack.pop();
        /**
         * 这里也同理，只是因为遍历结束结束索引的位置在数组的最后位置
         */
        const width = !stack.length ? len : len - stack[stack.length - 1] - 1;
        max = Math.max(max, nums[idx] * width);
    }
    return max;
}