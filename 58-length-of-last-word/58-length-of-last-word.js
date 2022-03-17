/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmed = s.trim()
    let arr = trimmed.split(' ')
    return arr[arr.length-1].length
    
};