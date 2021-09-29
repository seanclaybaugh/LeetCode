/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let y = Number(x.toString().split('').reverse().join(''))
    if ( y === x) {
        return true
    }
    return false;
    
    
};