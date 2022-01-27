/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create stack var
    let stack = [];
    let legend = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for (let i = 0; i < s.length; i++) {
        if (legend[s[i]]) {
            stack.push(s[i]);
        } else {
            if ( s[i] != legend[stack.pop()]) {
                return false;
            }
        }
    }
    return !stack.length
    
};