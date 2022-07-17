/**
 * four: 剑指 Offer 04. 二维数组中的查找
 * 解题思路：
 * 1. 二分法（先确认行，在确认列），时间复杂度：O(n * log(m))
 * 2. 转换成二叉搜索树
 */

// function binaryFind (arr, target) {
//     const result = false, len = arr.length;
//     if (target < arr[0] || target > arr[len - 1]) return result;
//     let l = 0, r = len - 1;
//     while (l <= r) {
//         const mid = (l + r) >> 1;
//         if (arr[mid] === target) return true;
//         if (arr[mid] < target) {
//             l = mid + 1;
//         } else {
//             r = mid - 1;
//         }
//     }
//     return result;
// }

/**
 * 1. 二分法
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function(matrix, target) {
//     if (!matrix.length) return false;
//     const row = matrix.length, col = matrix[0].length;
//     let result = false;
//     if (target < matrix[0][0] || target > matrix[row - 1][col - 1]) return result;
//     for (let i = 0; i < row; i++) {
//         if (binaryFind(matrix[i], target)) return true;
//     }
//     return result;
// };

/**
 * 2. 转换成二叉搜索树
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findNumberIn2DArray (matrix, target) {
    if (!matrix.length) return false;
    let row = matrix.length, r = 0, col = matrix[0].length, c = col - 1;
    while (r >= 0 && r < row && c >= 0 && c < col) {
        if (matrix[r][c] === target) return true;
        if (matrix[r][c] > target) {
            c -= 1;
        } else {
            r += 1;
        }
    }
    return false;
}