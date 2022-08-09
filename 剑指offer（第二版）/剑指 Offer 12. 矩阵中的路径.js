/**
 * twelve：剑指 Offer 12. 矩阵中的路径
 * 解题思路：
 * 1. 暴力（dfs）（以每个表格作为起点进行搜索）
 */

/**
 * 1. 暴力（dfs）（以每个表格作为起点进行搜索）
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
//     let flags = [], row = board.length, col = board[0].length, len = word.length;

//     for (let r = 0; r < row; r++) {
//         for (let c = 0; c < col; c++) {
//             if (board[r][c] != word[0]) continue;
//             initFlags();
//             const result = dfs(r, c, 0);
//             if (result) return true;
//         }
//     }

//     function initFlags () {
//         for (let i = 0; i < row; i++) {
//             flags[i] = [];
//         }
//     }


//     function dfs(r, c, idx = 0) {
//         if (board[r][c] != word[idx] || flags[r][c]) return false;
//         if (idx == (len - 1)) return true;
//         flags[r][c] = true;
//         /** 向上 */
//         if (r > 0 && !flags[r - 1][c] && dfs(r - 1, c, idx + 1)) return true;
//         if (c < col - 1 && !flags[r][c + 1] &&  dfs(r, c + 1, idx + 1)) return true;
//         if (r < row - 1 && !flags[r + 1][c] && dfs(r + 1, c, idx + 1)) return true;
//         if (c > 0 && !flags[r][c - 1] && dfs(r, c - 1, idx + 1)) return true;
//         flags[r][c] = false;
//         return false;
//     }
//     return false;
// };

/**
 * 1. 暴力（dfs）优化版
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist (board, word) {
    const row = board.length, col = board[0].length, len = word.length;
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }

    function dfs (r, c, idx) {
        if (board[r][c] !== word[idx] || board[r][c] === true) return false;
        if (idx + 1 == len) return true;
        board[r][c] = true;
        const result = (r + 1 < row && dfs(r + 1, c, idx + 1)) || (c + 1 < col && dfs(r, c + 1, idx + 1))
                    || (r > 0 && dfs(r - 1, c, idx + 1)) || ( c > 0 && dfs(r, c - 1, idx + 1));
        board[r][c] = word[idx];
        return result
    }
    return false;
}