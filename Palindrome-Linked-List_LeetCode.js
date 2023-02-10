// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example:
// Input: head = [1,2,2,1]
// Output: true

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let check = head
    let checkArr = []
    while(check){
        checkArr.push(check.val)
        check = check.next
    }
    check = head
    let count = 1
    //console.log(checkArr)
    while (count - 1 < (checkArr.length/2)){
        // console.log(check.val, checkArr[checkArr.length - count])
        if(check.val!==checkArr[checkArr.length - count]) return false
        check = check.next
        count++
    }
    return true
};