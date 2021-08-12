/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    
    let test = { val: -1, next: null };
    test.next = head;
    head = test;
    
    
    while (test.next !== null) {
        if (test.next.val === val){
            test.next = test.next.next
        } else {
            test = test.next;
        }
      
    }
              
  
    return head.next;
    
};