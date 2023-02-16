// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Example:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.



/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2)
    y = y.toString(2)
    let distance = 0
    while (x.length !== y.length){
        if (x.length > y.length) y = "0" + y
        else x = "0" + x
    }
    for(let i = 0; i<x.length; i++){
        if(x[i] !== y[i]) distance++
    }
    return distance
};