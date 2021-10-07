/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows || numRows < 1) {
        return [];
    }
    let result = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        let last = result[result.length-1];
        let shiftL = [...last, 0];
        let shiftR = [0, ...last];
        
        let row = shiftL.map((r, i) => r + shiftR[i]
        )
        
        result.push(row);
    }
    return result;
};