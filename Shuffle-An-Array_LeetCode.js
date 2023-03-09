// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
// Implement the Solution class:
// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example:
// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
//                        // Any permutation of [1,2,3] must be equally likely to be returned.
//                        // Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]




/**
 * @param {number[]} nums
 */
class Solution {
    constructor(nums){
        this.nums = nums
        this.shuffled = [...nums]
    }
    reset(){
        return this.nums
    }
    shuffle(){
        for(let i = 0; i<this.shuffled.length; i++){
            let newSpot = Math.floor(Math.random() * this.shuffled.length)
            let temp = this.shuffled[i]
            this.shuffled[i] = this.shuffled[newSpot]
            this.shuffled[newSpot] = temp
        }
        return this.shuffled
    }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */