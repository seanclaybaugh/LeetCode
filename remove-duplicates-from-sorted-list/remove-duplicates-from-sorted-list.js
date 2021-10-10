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
    if (!head) return head
    let x = head;
    
    while (x != null && x.next != null) {
        if (x.val === x.next.val) {
            x.next = x.next.next;
        } else {
            x = x.next
        }
      
    }
    return head;
};