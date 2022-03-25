/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    let n = nums.length;
    
    while (n > 0) {
        if (!nums.includes(n)) {
            result.push(n)
        }
        n--;
    }
    return result;
};