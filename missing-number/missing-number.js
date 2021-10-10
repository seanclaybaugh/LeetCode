/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let total = 0;
    
    for (let x = 0; x < nums.length; x++) {
        sum += nums[x];
        total += x+1
    }
    return total - sum;
    
};