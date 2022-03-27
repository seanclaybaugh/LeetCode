/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    
    const isAnagram = function(s, t) {
        if (s.length != t.length) {
            return false;
        }

        const arr1 = s.split('').sort()
        const arr2 = t.split('').sort()
        for(let i=0; i<s.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
       return true;
    };
    
    for (let i = 0; i < strs.length; i++) {
        let wasAnagram = false
        
        for(let j = 0; j < result.length; j++) {     
            if (isAnagram(result[j][0], strs[i])) {
                result[j].push(strs[i]);
                 wasAnagram = true;
             }   
        }
        if (!wasAnagram) {
            result.push([strs[i]])
        }
         
            
    }
    return result
      
};
    
