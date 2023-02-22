// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// Example:
// nput: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.



/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let count = 0

    if(dividend > (Math.pow(2,31) -1)) dividend = Math.pow(2,31) - 1
    if(dividend < Math.pow(-2,31)) dividend = Math.pow(-2,31)
    console.log(dividend)
    if(divisor === 1) return dividend
    if(divisor === -1) {
        return -dividend - (dividend === Math.pow(-2,31) ? 1 : 0)
    }
    let neg = ((dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0)) ? false : true
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    while(dividend >= divisor){
        dividend -= divisor
        count++
    }
    return (neg ? -count : count)
};