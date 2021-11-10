/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   
    let currentS = '';
    let longestS = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let ind = currentS.indexOf(char)
        
        if (ind > -1) {
         if (currentS.length > longestS.length) {
             longestS = currentS
         }
            currentS = currentS.slice(ind +1) + char
        } else {
            currentS += char
        }
    }
    if (currentS.length > longestS.length) {
             longestS = currentS
         }
    return longestS.length
    
    
};