/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let key = {};
    let result = false;
    nums.forEach((val)=>{
        if(key[val] === undefined) {
            key[val] = val;
        } else {
            result = true;
        }
    })
    return result;
};