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
// function numIslands (grid) {
//     const row = grid.length, column = grid[0].length, stack = [];
//     let num = 0;
//     for (let x = 0; x < row; x++) {
//         for (let y = 0; y < column; y++) {
//             if (grid[x][y] != 1) continue;
//             num++;
//             grid[x][y] = 0;
//             stack.push({x, y});
//             while (stack.length) {
//                 const node = stack.shift();
//                 if (node.x - 1 >= 0 && grid[node.x - 1][node.y] == 1) {
//                     stack.push({ x: node.x - 1, y: node.y });
//                     grid[node.x - 1][node.y] = 0;
//                 }
//                 if (node.y + 1 < column && grid[node.x][node.y + 1] == 1) {
//                     stack.push({ x: node.x, y: node.y + 1 });
//                     grid[node.x][node.y + 1] = 0;
//                 }
//                 if (node.x + 1 < row && grid[node.x + 1][node.y] == 1) {
//                     stack.push({ x: node.x + 1, y: node.y });
//                     grid[node.x + 1][node.y] = 0;
//                 }
//                 if (node.y - 1 >= 0 && grid[node.x][node.y - 1] == 1) {
//                     stack.push({ x: node.x, y: node.y - 1 });
//                     grid[node.x][node.y - 1] = 0;
//                 }
//             }
//         }
//     }
//     return num;
// }

function dfs (grid, x, y) {
    const col = grid.length, row = grid[0].length, queue = [{r: x, c: y}];
    while (queue.length) {
        const { c, r } = queue.shift(), fx = c - 1, fy = r - 1, nx = c + 1, ny = r + 1;
        if (fy >= 0 && grid[fy][c] == '1') {
            grid[fy][c] = '0';
            queue.push({ r: fy, c });
        }
        if (nx < col && grid[r][nx] == '1') {
            grid[r][nx] = '0';
            queue.push({ r, c: nx });
        }
        if (ny < row && grid[ny][c] == '1') {
            grid[ny][c] = '0';
            queue.push({ r: ny, c });
        }
        if (fx >= 0 && grid[r][fx] == '1') {
            grid[r][fx] = '0';
            queue.push({ r, c: fx });
        }
    }
}

function numIslands (grid) {
    if (!grid.length) return 0;
    let num = 0, row = grid.length, col = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == '0') continue;
            dfs(grid, i, j);
            num++;
        }
    }
    return num;
}
