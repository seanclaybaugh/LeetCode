/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let string = s.slice(0)
    
    while (string.indexOf('AB') >= 0 || string.indexOf('CD') >= 0) {
        if (string.indexOf('AB') >= 0) {
            string = string.replace('AB', '')
        }
        if (string.indexOf('CD') >= 0) {
            string = string.replace('CD', '')
        }
    }
    return string.length;
};