// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.




/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // let min = Infinity
    // let arr = []
    // arr.push(min)
    // for(let i = 0; i < nums.length; i++){
    //     if (nums[i] > min && nums[i] > arr[arr.length - 1]) arr.push(nums[i])
    //     else if(nums[i] < arr[arr.length - 1]) arr[arr.length - 1] = nums[i]
    //     min = Math.min(min, nums[i])
    //     arr[0] = min
    //     console.log(arr)
    // }
    // return arr.filter((item, index) => arr.indexOf(item) === index).length
  if (!nums.length) return 0;
  let arr = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
    }
    console.log(arr)
  }
  return Math.max(...arr);
};