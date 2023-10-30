/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let start = 0; 
    let maxNeg = 0;
    
    for (let i = 0; i < nums.length; i++) {
        start += nums[i]
        if (maxNeg > start) {
            maxNeg = start
        }
    }
    return Math.abs(maxNeg) + 1
};