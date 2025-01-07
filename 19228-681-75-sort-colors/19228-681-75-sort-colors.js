/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let blue = 0;
    let white = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            red++;
        }
        if (nums[i] === 1) {
            white++;
        }
        if (nums[i] === 2) {
            blue++;
        }
    }
    for (let i = 0; i <nums.length; i++) {
        if (red > 0) {
            nums[i] = 0;
            red--;
            continue;
        }
         if (white > 0) {
            nums[i] = 1;
            white--;
            continue;
        }
         if (blue > 0) {
            nums[i] = 2;
            blue--;
            continue;
        }
    }
    return nums;
};