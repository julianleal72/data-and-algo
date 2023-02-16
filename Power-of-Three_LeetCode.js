// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example:
// Input: n = 27
// Output: true
// Explanation: 27 = 33

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n>0){
        if(n%3 === 0) n = n/3
        else break
    }
    if(n===1) return true
    return false
};