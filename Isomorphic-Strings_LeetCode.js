// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example:
// Input: s = "egg", t = "add"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let newS = Array.from(new Set(s.split('')))
    let newT = Array.from(new Set(t.split('')))
    let tMap = []
    let sMap = []
    for (i = 0; i<s.length; i++){
        for (j = 0; j<newS.length; j++){
            if (s[i] === newS[j]) sMap.push(j)
        }
    }
    for (i = 0; i<t.length; i++){
        for (j = 0; j<newT.length; j++){
            if (t[i] === newT[j]) tMap.push(j)
        }
    }
    return tMap.toString() == sMap.toString()
};