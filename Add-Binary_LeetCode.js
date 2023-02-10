//Given two binary strings a and b, return their sum as a binary string.

//Example:
// Input: a = "11", b = "1"
// Output: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let decA = `0b${a}`
    //parseInt(a,2)
    let decB = `0b${b}`
    //parseInt(b,2)
    console.log(BigInt(decA), BigInt(decB))
    let sum = BigInt(decA) + BigInt(decB)
    return (sum).toString(2)  
};