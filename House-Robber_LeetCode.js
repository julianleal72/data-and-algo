// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let sum = 0
    let previous = 0
    // let lastHitHouse = -2
    // if(nums.length < 3){
    //     if(nums.length < 2) return nums[0]
    //     else return Math.max(nums[0], nums[1])
    // }  
    // for(let i = 0; i < nums.length; i++){
    //     if((nums[i] + nums[i+2]) <= nums[i+1]) i++ 
    //     if(lastHitHouse + 1 < i ) {
    //         sum += nums[i]
    //         lastHitHouse = i
    //     }
    // }
    for(let i = 0; i< nums.length; i++){
        let temp = sum 
        sum = Math.max(nums[i] + previous, sum)
        previous = temp
    }

    return sum
};