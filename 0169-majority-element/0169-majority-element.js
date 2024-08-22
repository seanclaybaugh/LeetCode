/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};
    nums.forEach((val)=>{
        if (counts[val]) {
            counts[val]++
        } else {
            counts[val] = 1
        }
    })
    console.log(counts)
    let max = 0;
    let result = '';
    for (key in counts) {
        if (counts[key] > max) {
            result = key;
            max = counts[key];
        }
    }
    return result;
};