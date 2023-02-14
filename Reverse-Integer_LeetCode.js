// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example:
// Input: x = 123
// Output: 321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    console.log(x)
    let str = ""
    str += x * (x>=0 ? 1:-1)
    console.log(str)
    let newStr = ""
    for(let i=str.length-1;i>-1;i--){
        newStr += str[i]
    }
    console.log(newStr)
    if(parseInt(newStr) > Math.pow(2,31) - 1) return 0
    return (x>=0 ? 1:-1) * parseInt(newStr)

};