// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let arr1 = []
    let arr2 = []
    while (l1){
        arr1.unshift(l1.val)
        l1 = l1.next
    }
    while (l2){
        arr2.unshift(l2.val)
        l2 = l2.next
    }
    let newArr = (BigInt(arr1.join('')) + BigInt(arr2.join('')) + "").split("") 
    let start = new ListNode(-1)
    let check = start
    for(let i = newArr.length -1; i >= 0; i-- ){
        let temp = new ListNode(parseInt(newArr[i]))
        check.next = temp
        check = check.next
    }
    return start.next
};