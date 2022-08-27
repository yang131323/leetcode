/**
 * two-hundred: 200. 岛屿数量
 * 解题思路
 * 1. dfs：遍历图，遇到1就进行dfs一次，然后将遍历过后的1改为0，dfs几次就是
 */


// function dfs (grid, x, y) {
//     const row = grid.length, column = grid[0].length;
//     // if (!(x >= 0 && y >= 0 && x < row && y < column)) return;
//     grid[x][y] = 0;
//     if (y - 1 >= 0 && grid[x][y - 1] == 1) dfs(grid, x, y - 1);
//     if (x + 1 < row && grid[x + 1][y] == 1) dfs(grid, x + 1, y);
//     if (y + 1 < column && grid[x][y + 1] == 1) dfs(grid, x, y + 1);
//     if (x - 1 >= 0 && grid[x - 1][y] == 1) dfs(grid, x - 1, y);
// }

/**
 * dfs
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//     const row = grid.length, column = grid[0].length;
//     let num = 0;
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < column; j++) {
//             if (grid[i][j] != 1) continue;
//             num++;
//             dfs(grid, i, j);
//         }
//     }
//     return num;
// };

/**
 * bfs
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands (grid) {
    const row = grid.length, column = grid[0].length, stack = [];
    let num = 0;
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            if (grid[x][y] != 1) continue;
            num++;
            grid[x][y] = 0;
            stack.push({x, y});
            while (stack.length) {
                const node = stack.shift();
                if (node.x - 1 >= 0 && grid[node.x - 1][node.y] == 1) {
                    stack.push({ x: node.x - 1, y: node.y });
                    grid[node.x - 1][node.y] = 0;
                }
                if (node.y + 1 < column && grid[node.x][node.y + 1] == 1) {
                    stack.push({ x: node.x, y: node.y + 1 });
                    grid[node.x][node.y + 1] = 0;
                }
                if (node.x + 1 < row && grid[node.x + 1][node.y] == 1) {
                    stack.push({ x: node.x + 1, y: node.y });
                    grid[node.x + 1][node.y] = 0;
                }
                if (node.y - 1 >= 0 && grid[node.x][node.y - 1] == 1) {
                    stack.push({ x: node.x, y: node.y - 1 });
                    grid[node.x][node.y - 1] = 0;
                }
            }
        }
    }
    return num;
}
