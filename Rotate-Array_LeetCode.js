// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // while(k>0){
    //     nums.unshift(nums.pop())
    //     k--
    // }
    // for(let i = 0; i<k; i++){
    //     nums.unshift(nums.pop())
    // }
    const len = nums.length
    k = (k % len)
    
    let end = nums.splice(len - k)

    nums.splice(0,0,...end)
};