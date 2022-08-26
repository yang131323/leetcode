/**
 * thirty-six：36. 有效的数独
 * 解题思路：
 * 1. 按照规则验证行、列和3*3方格
 */

/**
 * 1. 按照规则验证行、列和3*3方格
 * 详情：
 * 1. 验证行、累计列和累积矩阵
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /** row用来记录行出现情况、col用来记录各列出现情况、matrix用来记录各3 * 3矩阵情况 */
    let row = {}, col = Array(9), matrix = [{}, {}, {}], len = board.length;
    for (let i = 0; i < 9; i++) {
        col[i] = {};
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const char = board[i][j];
            if (char == '.') continue;
            const idx = Math.floor(j / 3);
            if (row[char] || col[j][char] || matrix[idx][char]) return false;
            row[char] = col[j][char] = matrix[idx][char] = true;
        }
        row = {};
        if ((i % 3) == 2) matrix = [{}, {}, {}];
    }
    return true;
};