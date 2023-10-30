/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    let dupe = 100
    for (let i = 0; i< nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            if (nums1[i] < dupe) {
                dupe = nums1[i]
            }
        }
    }
    const s1 = Math.min(...nums1)
    const s2 = Math.min(...nums2)
    console.log(s1)
    const lowestCombo = s1 >= s2 ? s2.toString() + s1.toString() : s1.toString() + s2.toString()
    return Math.min(lowestCombo, dupe)
};