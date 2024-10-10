/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const [h, w] = [grid.length, grid[0].length];
    
    const dfs = (i, j) => {
        if (i >= 0 && j >= 0 && i < h && j < w && grid[i][j] === "1") {
            grid[i][j] = 0;
            dfs(i+1, j)
            dfs(i-1, j)
            dfs(i, j+1)
            dfs(i, j-1)
        }
    }
    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            console.log(i, j)
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j)
            }
        }
    }
    return count;
};