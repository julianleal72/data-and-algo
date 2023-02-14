// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let currentMax = 0 
    let i = 0
    let j = height.length - 1
    // for (let i=0; i<height.length-1; i++){
    //     for(let j=i+1; j<height.length;j++){
        while(i<j){
            currentMax = Math.max(currentMax, Math.min(height[j], height[i])*(j-i))
            height[i] < height[j] ? i++ : j--
        }
    //     }
    // }
    return currentMax
};