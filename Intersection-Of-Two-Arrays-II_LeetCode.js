
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort()
    nums2.sort()
    let intersection = []
    if(JSON.stringify(nums1) == JSON.stringify(nums2)) return nums1
    for(let i = 0; i < Math.min(nums1.length,nums2.length); i++){
        let smallThing = (nums1.length > nums2.length ? nums2 : nums1)
        let bigThing = (nums1.length > nums2.length ? nums1 : nums2)

        if(bigThing.includes(smallThing[i])) {
            intersection.push(bigThing.splice(bigThing.indexOf(smallThing[i]), 1))
            smallThing.splice(i,1)
            i--
        }
    }
    return intersection
};