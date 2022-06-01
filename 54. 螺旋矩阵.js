/**
 * fifty four: 螺旋矩阵
 * 1. 暴力：模拟这个过程
 */

/**
 * 1. 模拟
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const row = matrix.length, column = matrix[0].length, result = [];
    let direct = 1, ro = 0, col = 0, up = 0, d = row - 1, l = 0, r = column - 1, map = {};
    while (true) {
        if (map[`${ro}${col}`] == null && ro >= 0 && ro < row && col >= 0 && col < column) {
            result.push(matrix[ro][col]);
            map[`${ro}${col}`] = true;
        }
        if (l >= r && up >= d && !(l == r && up == d)) break;
        if (direct == 0) { // 向上
            if (ro - 1 >= 0) {
                ro--;
                ro <= up && (direct = 1) && l++;
            } else {
                col++;
                (direct = 1) && l++;
            }
        } else if (direct == 1) { // 向右
            if (col + 1 < column) {
                col++;
                col >= r && (direct = 2) && up++;
            } else {
                ro++;
                (direct = 2) && up++;
            }
        } else if (direct == 2) { // 向下
            if (ro + 1 < row) {
                ro++;
                ro >= d && (direct = 3) && r--;
            } else {
                col--;
                (direct = 3) && r--;
            }
        } else if (direct == 3) { // 向左
            if (col - 1 >= 0) {
                col--;
                col <= l && d-- && (direct = 0);
            } else {
                ro--;
                d-- && (direct = 0);
            }
        }
    }
    return result;
};