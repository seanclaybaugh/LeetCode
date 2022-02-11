/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
    
    let k = 0;
    let last = -101;
    for ( let i=0; i < nums.length; i++) {
        if (nums[i] > last) {
            nums[k] = nums[i]
            k++;
            last = nums[i]
            
        } 
        if (nums[i] === last) {
            continue;
        }
    }
    
    return k;
};