// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

//Example:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let bottom = 0
while (bottom <= x) {
    if ((bottom * bottom) < x) bottom++
    else if(bottom *bottom === x) return bottom
    else return bottom - 1}
};