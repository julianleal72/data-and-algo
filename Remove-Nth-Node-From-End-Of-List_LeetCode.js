// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0
    let check = head
    while(check.next){
        count++
        check=check.next
    }
    let stop = count - n + 1
    console.log(stop)
    if(stop === 0) return head.next
    count = 0
    check = head
    while(head && head.next){
        count++
        if(count === stop) head.next = head.next.next
        head=head.next
    }
    return check
};