// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example:
// Input: nums = [1,2,3,1], k = 3
// Output: true


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i<nums.length - 1; i++){
    for(let j = i + 1; j<nums.length; j++){
        if(nums[i] === nums[j]) {
            if(k >= Math.abs(i-j)) return true
        }
    }
}
return false
};