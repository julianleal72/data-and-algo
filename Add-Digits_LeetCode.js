// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    let strArr = num.toString().split("")
    let sum = num.toString()
    while (sum.length > 1){
        let test = 0
        for(const x of strArr){
            test += parseInt(x)
        }
        sum = test.toString()
        strArr= sum.split("")
    }
    return sum
};