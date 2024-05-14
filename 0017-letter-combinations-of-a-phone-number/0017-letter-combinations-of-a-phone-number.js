/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let arr = digits.split('')
    let result = digits.length ? [''] : []
    const leg = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    
    for (let i = 0; i< arr.length; i++) {
        console.log(arr[i])
        const acc = [];
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < leg[arr[i]].length; k++) {
                console.log(result[j], leg[arr[i]][k])
                acc.push(result[j] + leg[arr[i]][k])
            }
        }
        console.log(acc)
        result = acc;
    }
    
    return result;
    
    
};