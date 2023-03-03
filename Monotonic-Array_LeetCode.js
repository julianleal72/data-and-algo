// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example:
// Input: nums = [1,2,2,3]
// Output: true
// Input: nums = [6,5,4,4]
// Output: true


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let i = 0
    while(nums[i]===nums[i+1]){
        i++
    }
    if(nums[i] < nums[i+1]){
    while(i < nums.length){
        if(nums[i + 1] < nums[i]) return false
        i++
    }}
    else{
    while(i < nums.length){
        if(nums[i + 1] > nums[i]) return false
        i++
    }}
    return true
};