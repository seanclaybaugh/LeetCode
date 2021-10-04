/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    let subArrSum = nums[0], maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        subArrSum = Math.max(nums[i], subArrSum + nums[i])
        maxSum = Math.max(maxSum, subArrSum);
    }
    return maxSum;
};