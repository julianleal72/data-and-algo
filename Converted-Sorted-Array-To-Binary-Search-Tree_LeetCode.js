// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums === null || !nums.length) return null
    let mid = Math.floor(nums.length/2)
    let start = new TreeNode(nums[mid])
    start.left = sortedArrayToBST(nums.slice(0,mid))
    start.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
    return start
};