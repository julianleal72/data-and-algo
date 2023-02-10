// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let check = head
    let count = 0
    while (check){
        check = check.next
        count++
    }
    console.log(count)
    let half = Math.round(count/2)
    count = (count%2>0? 1 : 0)
    check = head
    while (count < half){
        check = check.next
        count++
    }
    return check   
};