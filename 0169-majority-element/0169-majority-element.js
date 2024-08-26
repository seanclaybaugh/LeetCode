/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   const key = {};
   let result = '';
   let max = 0;
   nums.forEach((val)=> {
    if (key[val]) {
        key[val]++
    } else {
        key[val] = 1;
    }
   })
   for (prop in key) {
    if (key[prop] > max) {
        max = key[prop]
        result = prop
    }
   }
    return result;
};