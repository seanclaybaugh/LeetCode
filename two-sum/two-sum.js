/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    for(var x=0; x < nums.length; x++) {
        for (var i= x+1; i < nums.length; i++){
            if (nums[x]+ nums[i] === target) {
                result.push(x, i);
            }
        }
    }
    
    return result;
};