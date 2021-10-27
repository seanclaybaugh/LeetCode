/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    if (mat[0].length * mat.length != r * c) {
        return mat;
    }
    let arr = [], result = [];
    
    mat.forEach((val) => {
        val.forEach((int) => {
            arr.push(int)
        })
    })
    while(arr.length > 0) {
    result.push(arr.splice(0, c));
    }
    return result;
    
};