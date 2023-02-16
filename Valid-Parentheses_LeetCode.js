// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example:
// Input: s = "()[]{}"
// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let queue = []
    // if (s.length % 2 !== 0) return false
    // console.log(s[s.length-1])
    // if (s[s.length-1] === "(" || s[s.length-1] === "[" || s[s.length-1] === "{") return false
    for(let i = 0; i<s.length; i++){
        if(s[i] === "]"){
            if(queue[queue.length-1] === "[") queue.pop()
            else {console.log("oh no ]")
                return false}
        }
        else if(s[i] === "}"){
            if(queue[queue.length-1] === "{") queue.pop()
            else {console.log("oh no }")
                return false}
        }
        else if(s[i] === ")"){
            if(queue[queue.length-1] === "(") queue.pop()
            else {console.log("oh no )")
                return false}
        }
        else queue.push(s[i])
        console.log(queue)
    }
    return (queue.length > 0 ? false:true)
};