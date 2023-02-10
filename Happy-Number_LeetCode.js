// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let purgArr = [n]
    let okay = true
    let newN = n
    while (okay) {
        let sum = 0
        let str = newN.toString()
        for (let i = 0; i < str.length; i++){
            sum += Math.pow(parseInt(str[i]),2)
        }
        newN = parseInt(sum) 
        if (newN === 1) {
            console.log(true)
            return true}
        if (purgArr.find(e => e === newN)) okay = false
        else purgArr.push(newN)
    }

    console.log(false)
    return false
};