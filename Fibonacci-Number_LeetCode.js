The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===1) return 1
    let counter = 1
    let prev1 = 0
    let prev2 = 1
    let fib = 0
    while(counter < n){
        fib = prev1 + prev2
        prev1 = prev2
        prev2 = fib
        counter++
    }
    return fib
};