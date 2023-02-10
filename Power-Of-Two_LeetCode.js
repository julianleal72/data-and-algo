// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2^x.

// Example:
// Input: n = 1
// Output: true
// Explanation: 20 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n <= 0) return false
    let divideMe = n
    while(divideMe > 1){
        if(divideMe % 2 > 0) return false
        else divideMe /= 2
    }
    return true
};