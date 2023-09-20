/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   const keys = {}
   for (let i = 0; i < s.length; i++) {
       if(keys[s[i]]) {
           keys[s[i]] += s[i]
       } else {
           keys[s[i]] = s[i]
       }
   }
    const arr = Object.values(keys)
    arr.sort((a,b)=> a.length >= b.length ? -1 : 1)
    console.log(arr)
    return arr.join('')
};