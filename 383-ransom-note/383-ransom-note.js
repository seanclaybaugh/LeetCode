/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {};
    
    for (let i = 0; i< magazine.length; i++) {
        if(!hash[magazine[i]]) {
            hash[magazine[i]] = 1;
        } else {
            hash[magazine[i]]++;
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (!hash[ransomNote[i]] || hash[ransomNote[i]] === 0) {
            return false;
        } else {
            hash[ransomNote[i]]--;
        }
    }
    return true;
};