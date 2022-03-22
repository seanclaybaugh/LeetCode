/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const legend = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
   
    for (let i = 0; i < s.length; i++) {
        if (legend[s[i]] < legend[s[i+1]]) {
            result -= legend[s[i]];
        } else {
        result += legend[s[i]]
        }
    }
    return result;
};