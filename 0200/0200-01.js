var LAND = "1";
var WATER = "0";

var numIslands = function(grid) {
    const ROW = grid.length;
    if (ROW <= 0) return 0;
    
    const COL = grid[0].length;
    let islands = 0;
    
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] === LAND) {
                islands++;
                dfs(grid, ROW, COL, i, j);
            }
        }
    }
    return islands;
};

function dfs(grid, row, col, r, c) {
    if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] !== LAND) return;
    
    grid[r][c] = WATER;
    dfs(grid, row, col, r+1, c);
    dfs(grid, row, col, r, c+1);
    dfs(grid, row, col, r-1, c);
    dfs(grid, row, col, r, c-1);
}
