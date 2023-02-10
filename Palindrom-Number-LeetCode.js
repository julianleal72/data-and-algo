// Given an integer x, return true if x is a palindrome, and false otherwise.
//Example:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let palindrome = true
    let numStr = x.toString()
    for (let i=0; i < numStr.length; i++){
        console.log(numStr[i])
        console.log(numStr[numStr.length - i - 1])
        console.log(numStr[i] != numStr[numStr.length - i - 1])
        if(numStr[i] != numStr[numStr.length - i - 1]) palindrome = false
    }
    console.log(palindrome)
    return palindrome
};