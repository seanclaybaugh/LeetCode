/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hash1 = {};
    const hash2 = {}
    
    for (let i = 0; i < s.length; i++) {
        if (hash1[s[i]]) {
            hash1[s[i]]++
        } else {
            hash1[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (hash2[t[i]]) {
            hash2[t[i]]++
        } else {
            hash2[t[i]] = 1;
        }
    }
    for (const key in hash2) {
        
        if (hash1[key] !== hash2[key]) {
            return key;
        }
    }
   
};