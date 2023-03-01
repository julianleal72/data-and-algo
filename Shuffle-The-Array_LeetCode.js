// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].




/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr = []
    let nums2 = nums.splice(n)
    // for(let i = 1; i < n; i+=2){
    //     let tmp = nums[i]
    //     nums[i] = nums[i+n - 1]
    //     nums[i+n - 1] = tmp
    // }
    for (i = 0; i < n; i++){
        newArr.push(nums[i])
        newArr.push(nums2[i])
    }
    return newArr
};