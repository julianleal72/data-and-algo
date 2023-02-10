// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

//Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let s2 = s.toLowerCase()
s2 = s2.replace(/[^a-z0-9]/gi, '')
let palindrome = true
for (let i = 0; i < s2.length/2; i++){
    console.log(s2[i] + "  +  " + s2[s2.length - 1 - i])
    if(s2[i] !== s2[s2.length - 1 - i]) palindrome = false 
}
console.log(s2)
console.log(palindrome)
return palindrome
};