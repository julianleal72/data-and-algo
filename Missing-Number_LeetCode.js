// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.map(val => val.toFixed())
    nums = nums.map(val => Number.parseInt(val, 10))
    nums.sort(function(a, b){return a-b})
    console.log(nums)
    if(nums.find(element => element === 0) === undefined) return 0
    for(let i = 0; i<nums.length - 1; i++){
        if(nums[i+1]!==i+1) return i + 1
    }
    return nums.length
};