// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example:
// Input: nums = [2,2,1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    let i = 0
    while (i < nums.length - 1){
        if(nums[i] !== nums[i+1]) {
            console.log(nums[i])
            return (nums[i])
        }
        else i+=2
    }
    console.log(nums[nums.length - 1])
    return nums[nums.length - 1]
};