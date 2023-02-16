// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


// Example:
// Input: s = "leetcode"
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length === 1) return 0
    for(let i=0; i<s.length; i++){
        let holder = s
        if(!(holder.replace(holder[i],"").includes(holder[i]))){
            return i
        }
    }
    return -1
};