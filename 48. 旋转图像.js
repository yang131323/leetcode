/**
 * fouty eight: 48. 旋转图像
 * 解题思路：
 * 1. 暴力求解：r => col（矩阵大小） - r（当前元素的横坐标） c => r
 * 2. 暴力优化版：每次其实就是交换四个点，不需要多一个循环处理
 */
function swapMatrix (matrix, r, c) {
    let size = matrix.length - 1, row = c, col = size - r, num = matrix[r][c];
    while (!(row == r && c == col)) {
        const temp = matrix[row][col];
        matrix[row][col] = num;
        num = temp;
        [row, col] = [col, size - row];
    }
    matrix[row][col] = num;
}

/**
 * 1. 暴力求解
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let size = matrix.length, mid = Math.max(size / 2), loop = 1;
    for (let i = 0; i <= mid; i++) {
        for (let j = loop - 1; j < size - loop; j++) {
            swapMatrix(matrix, i, j);
        }
        loop++;
    }
};