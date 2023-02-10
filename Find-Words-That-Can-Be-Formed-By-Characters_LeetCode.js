// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Example:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    let total = 0
    for (const word of words){
        let test = true
        let charz = [...chars]
        for (let i = 0; i < word.length; i++) {
            if (charz.indexOf(word[i]) >= 0){
                charz.splice(charz.indexOf(word[i]), 1)
            }
            else test = false
            // if (!charz.includes(word[i])) {
            //     test = false
            // }
        }
        if(test){
            total += word.length
        }
    }
    return total
};