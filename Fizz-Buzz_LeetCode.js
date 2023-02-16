// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let newArr = []
    for (let i=1; i < n + 1; i++){
        let word = ""
        if(i % 3 === 0) word += "Fizz"
        if(i % 5 === 0) word += "Buzz"
        newArr.push(word + (word.length === 0 ? i : ""))
    }
    return newArr
};