/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let size = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j]) {
                if (!grid[i+1] || !grid[i + 1][j]) {
                    size++;
                }
                if (!grid[i-1] || !grid[i-1][j]) {
                    size++
                }
                if (!grid[i][j - 1]) {
                    size++;
                }
                if (!grid[i][j + 1]) {
                    size++;
                }
            }
            
        }
    }
        return size;
};