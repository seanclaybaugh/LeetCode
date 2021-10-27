/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []; 
    nums1.forEach((val) => {
        if (nums2.indexOf(val) >= 0) {
            result.push(val);
            nums2.splice(nums2.indexOf(val),1);
        }
    })
    return result;
};