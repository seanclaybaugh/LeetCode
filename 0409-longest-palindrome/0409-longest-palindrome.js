/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    
    for (let char of s) {
        if (map[char]) map[char]++;
        else  map[char] = 1;;
    }
    
    let isThereOdd = false;
    let sum = 0;
    for (let char in map) {
        if (map[char] % 2 > 0) {
            isThereOdd = true;
        }
        sum+= Math.floor(map[char]/2)*2
    }
    
    return isThereOdd ? sum+1 : sum
};