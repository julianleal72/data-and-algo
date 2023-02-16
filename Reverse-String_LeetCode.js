// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let k = 0
    while(k<s.length/2){
        let temp = s[k]
        s[k] = s[s.length-1-k]
        s[s.length-1-k] = temp
        k++
    }
};