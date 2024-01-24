/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
     const result = [];

  for (const word of words) {
    result.push(word);
    if (result.join("") === s) {
      return true;
    }
  }

  return false;
};