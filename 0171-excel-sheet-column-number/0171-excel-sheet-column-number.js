/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
      let pow = 0;
  let result = 0;
  for (let i = columnTitle.length - 1; i >= 0; i -= 1) {
    result += (columnTitle[i].charCodeAt(0) - 64) * Math.pow(26, pow);
    pow += 1;
  }
  return result;
};