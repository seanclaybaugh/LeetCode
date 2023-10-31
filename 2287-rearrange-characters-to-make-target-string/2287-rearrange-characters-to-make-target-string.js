/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
     if (!target.split('').every(el => s.includes(el))) return 0;

  const sMap = {};
  const tMap = {};

  const sameCharDivisions = [];

  for (const char of s) {
    if (target.includes(char)) {
      sMap[char] = (sMap[char] || 0) + 1;
    }
  }

  for (const char of target) {
    tMap[char] = (tMap[char] || 0) + 1;
  }

  for (const [key, val] of Object.entries(sMap)) {
    if (val < tMap[key]) return 0;

    sameCharDivisions.push(val / tMap[key]);
  }

  return Math.floor(Math.min(...sameCharDivisions));
};