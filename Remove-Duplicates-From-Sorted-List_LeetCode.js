// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

//Example:
// Input: head = [1,1,2]
// Output: [1,2]

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
 var deleteDuplicates = function(head) {
    let check = head
    let newHead=check
    while (check && check.next){
        while (check.next && (check.next.val === check.val)){
            check.next = check.next.next
        }
        check = check.next
    }
    return newHead
};