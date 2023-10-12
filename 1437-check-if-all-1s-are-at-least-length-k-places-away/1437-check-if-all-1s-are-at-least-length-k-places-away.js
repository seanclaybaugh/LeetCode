/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let startIdx = nums.indexOf(1);
    let indices = [startIdx];
    for (let i = startIdx+1; i < nums.length; i++) {
        if (nums[i] === 1) {
            if ((i - indices[indices.length-1]) >= k+1) indices.push(i);
            else return false;
        }
    }
    return true;
};