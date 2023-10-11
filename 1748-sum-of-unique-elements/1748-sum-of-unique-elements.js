/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const uniqVals = {};
    for(let i = 0; i<nums.length; i++) {
        if (!uniqVals[nums[i]] && uniqVals[nums[i]] !== 0) {
            uniqVals[nums[i]] = nums[i]
        } else {
            uniqVals[nums[i]] = 0
        }
    }
    console.log(uniqVals)
    let result = 0;
    for (let cv in uniqVals) {
        result += uniqVals[cv]
    }
    return result;
};