/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    const hash = [];
    let result = [];
    
    for (let i = 0; i < mat.length; i++) {
        const strength = mat[i].reduce((acc, curr) => acc+curr, 0)
        //const hashId = mat[i].join('');
        if (hash[strength]) {
            hash[strength].push(i)
        } else {
            hash[strength] = [i];
        }
    }
    console.log(hash)
    for (let j = 0; j < hash.length; j++) {
        if(hash[j]) {
        result.push.apply(result, hash[j])
        }
    }
    return result.slice(0, k);
};