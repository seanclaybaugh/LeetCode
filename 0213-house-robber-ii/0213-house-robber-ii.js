/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
      if (nums.length <= 3) {
        return Math.max(...nums);
    }
    let money1 = robHelper(0, nums.length - 2, nums);
    let money2 = robHelper(1, nums.length - 1, nums);
    return Math.max(money1, money2);
    };


const robHelper = (start, end, nums) => {
    let dp = new Array(start + (end - start + 1));
    for (let i = start; i <= end; i++) {
        dp[i] = Math.max((dp[i-1] ? dp[i-1] : 0), (dp[i-2] ? dp[i-2] : 0) + nums[i]);
    }
    return dp[end];
};