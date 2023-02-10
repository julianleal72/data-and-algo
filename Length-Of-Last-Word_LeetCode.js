// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let found_word = false
let end_index = 0
let start_index = -1
for (let i = s.length - 1; i >= 0; i--){
    console.log(i)
    console.log(s[i])
    if(!found_word){
        if(s[i] !== " ") {
            found_word = true
            end_index = i
            console.log("end_index is " + end_index)} }
    else {
        if (s[i] === " ") {
            start_index = i 
            i = -100
        }
    }
}
console.log(end_index - start_index)
return end_index - start_index
};