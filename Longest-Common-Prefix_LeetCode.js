// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
//Example:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = ""
  if(strs.length > 1){
  for (let i = 0; i < strs[0].length; i++){
      for (let j = 1; j < strs.length; j++){
          if(strs[0][i] != strs[j][i]) return prefix
          else if (j === strs.length - 1) prefix = prefix + strs[0][i]
      }
  }
  console.log(prefix)
  return prefix}
      else return strs[0]
};