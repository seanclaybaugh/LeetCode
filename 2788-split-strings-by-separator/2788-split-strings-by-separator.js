/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let result = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(separator)) {
            const arrInsert = [];
            let newWord = '';
            for(let j = 0; j < words[i].length; j++) {
                if (words[i][j] === separator) {
                    if (newWord.length > 0) {
                        arrInsert.push(newWord)
                        newWord = ''
                    }
                } else {
                    newWord += words[i][j];
                }
            }
            if (newWord.length) {
                arrInsert.push(newWord)
            }
            result = [...result, ...arrInsert]
        } else {
            result.push(words[i])
        }
    }
    return result; 
};