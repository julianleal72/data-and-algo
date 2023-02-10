// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example:
// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    if (nums.length < 3) return nums[0]
    let newNums = nums.sort((a,b) => a-b);
    let currentCount = 1;
    let biggestCount = 1;
    let biggestNum = 0;
    console.log(newNums)
    for (let i = 0; i < newNums.length - 1; i++){
        if (newNums[i+1] === newNums[i]) currentCount ++
        else currentCount = 1;
        if (currentCount > biggestCount) {
            biggestCount = currentCount;
            biggestNum = newNums[i];
        }
    }
    console.log(biggestNum);
    return biggestNum;
};