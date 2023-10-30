/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let answer = Infinity;
    let absAnswer = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const temp = Math.abs(nums[i])
        if (temp < absAnswer) {
            answer = nums[i]
            absAnswer = temp
        }
        if (temp === absAnswer && nums[i] > answer) {
            answer = nums[i]
            absAnswer = temp
        }
    }
    return answer
};