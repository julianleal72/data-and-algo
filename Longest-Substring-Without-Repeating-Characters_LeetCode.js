// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let substring = ""
    let max = 0
    let i = 0
    let j = 0

    while(i < s.length && j < s.length){
        if(!substring.includes(s[j])){
            substring += s[j]
            max = Math.max(max, j - i + 1)
            j++
        }
        else {
            substring = substring.slice(1)
            i++
        }
    }
    return max

    //THIS WORKED BUT TOOK TOO LONG
    // let currentSubstring = ""
    // let longestSubstring = ""
    // if (s.length<2) return s.length
    // for(let i = 0; i<s.length-1;i++){
    //     currentSubstring = ""
    //     currentSubstring += s[i]
    //     console.log("i is " + i + " and cs is " + currentSubstring)
    //     for(let j = i+1;j<s.length;j++){
    //         if(currentSubstring.includes(s[j])) {
    //             if(currentSubstring.length >= longestSubstring.length) {
    //                 longestSubstring = currentSubstring
    //                 console.log("the current long is " + longestSubstring)
    //             }
    //             if (j === s.length - 1 && currentSubstring.length > s.length/2) return longestSubstring.length
    //             break
    //         }
    //         else currentSubstring += s[j]
    //         //console.log("j is " + j + " and cs is " + currentSubstring)
    //         //if(currentSubstring.length === s.length) longestSubstring = currentSubstring
    //         if (j === s.length - 1 && currentSubstring.length > s.length/2) return currentSubstring.length
    //     }
    // }
    // if(currentSubstring.length > longestSubstring.length) longestSubstring = currentSubstring
    // console.log(longestSubstring)
    // return longestSubstring.length
};