/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
     if (numRows === 1) return s
    
    const res = Array.from({length: numRows}, () => [])
    
    let isMovingDown = true;
    let currentRow = 1
    
    for (let i = 0; i < s.length; i++) {
      res[currentRow - 1].push(s[i])
      
      if (isMovingDown) {
        currentRow++
        
        if (currentRow > numRows) {
          isMovingDown = false
          currentRow = numRows - 1
        }
      } else {
        currentRow--
        
        if (currentRow < 1) {
          currentRow = 2
          isMovingDown = true
        }
      }
    }
    
    return res.map(el => el.join("")).join("")
};