/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            if (Object.values(map).includes(t[i])) {
                return false;
            }
        map[s[i]] = t[i]
        } else {
            if (map[s[i]] != t[i]) {
                return false;
            }
            
        }
        
    }
    return true;
};