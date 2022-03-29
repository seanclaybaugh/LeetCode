/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    let s = num.toString();
    const arr = s.split('');
    return addDigits(arr.reduce((acc, val) => Number(val)+acc, 0))
    
};