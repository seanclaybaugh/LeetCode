/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
      let res = -1
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(largestDigit(nums[i]) === largestDigit(nums[j]) && nums[i] + nums[j] > res) res = nums[i] + nums[j]
        }
    }

    return res
};

let largestDigit = num => {
    let max = num % 10

    while(num > 0) {
        num = Math.floor(num / 10)

        if(num %10 > max) max = num %10
    }

    return max
};