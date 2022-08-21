/**
 * seventy-three: 73. 矩阵置零
 * 解题思路：
 * 1. 按行遍历，记录置零的列和行
 * 2. 两遍扫：第一遍确定需要置零的行和列，第二遍就是置零
 */

/**
 * 1. 按行遍历，记录置零的列和行
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function(matrix) {
//     if (!matrix.length) return matrix;
//     const row = matrix.length, col = matrix[0].length, zeroCol = new Set(), zeroRow = new Set();
//     for (let i = 0; i < row; i++) {
//         matrix[i].forEach((item, index) => {
//             if (item) return;
//             zeroRow.add(i);
//             !zeroCol.has(index) && zeroCol.add(index)
//         });
//         if (zeroCol.size === col) break;
//     }
//     for (let i = 0; i < row; i++) {
//         for (let c = 0; c < col; c++) {
//             if (zeroCol.has(c) || zeroRow.has(i)) matrix[i][c] = 0;
//         }
//     }
//     return matrix;
// };

/**
 * 2. 利用第一行第一列，记录需要为0的列（内存优化）
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes (matrix) {
    if (!matrix.length) return matrix;
    const row = matrix.length, col = matrix[0].length;
    let isZero = false;
    for (let i = 0; i < row; i++) {
        if (!matrix[i][0]) isZero = true;
        for (let j = 1; j < col; j++) {
            if (!matrix[i][j]) matrix[i][0] = matrix[0][j] = 0;
        } 
    }
    // 第一行和第一列会影响后面的结果，因此他们的置零要放到最后
    for (let i = row - 1; i >= 0; i--) {
        for (let j = 1; j < col; j++) {
            if (!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0;
        }
        if (isZero) matrix[i][0] = 0;
    }
    return matrix;
}