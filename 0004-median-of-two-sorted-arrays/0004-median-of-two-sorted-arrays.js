/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => a-b)
    console.log(nums)
    if(nums.length % 2 === 0) {
        return (nums[Math.floor(nums.length/2)-1]+nums[Math.floor(nums.length/2)])/2
    } else {
        return nums[Math.floor(nums.length/2)]
    }

};