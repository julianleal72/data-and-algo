// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

// Example:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0]
    let end = null
    let output = []
    for(let i=0; i<nums.length; i++){
        //console.log(i, start, end)
        if(nums[i+1] !== (nums[i] + 1)){
            end = nums[i]
            //console.log(end)
            output.push(end === start ? start + "" : start + "->" + end)
            //console.log(output)
            start = nums[i+1]
            //console.log(start)
            end = null
        }
    }
    //console.log(output)
    if(!end) output.push(""+start)
    output.splice(output.length - 1)
    return output
};