/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const stack = s.split('')
    
    for (let i=0; i < t.length; i++){
        if(t[i]===stack[0]) {
            stack.shift();
        }
    }
    if (stack.length === 0) {
       return true;     
    }
    return false;
};