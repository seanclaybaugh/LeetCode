/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let max = 0;
    const h = grid.length
    const w = grid[0].length
    
    const dfs = (i, j) => {
        
        if (i < h && j < w && i >= 0 && j >= 0 && grid[i][j] === 1) {
            grid[i][j] = 0
            return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j-1) + dfs(i, j+1)
        }
        return 0
    }
    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(i, j))
            }
        }
    }
    
    return max
}
   