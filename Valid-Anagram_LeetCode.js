// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let sArr = s.split("")
    let tArr = t.split("")
    tArr = tArr.sort()
    sArr = sArr.sort()
    console.log(tArr)
    console.log(sArr)
    if (JSON.stringify(tArr) == JSON.stringify(sArr)) return true
    return false
};