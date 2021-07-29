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
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let hp = new ListNode();
    let carry = 0;
    let head = hp;
    
    while(p1 != null || p2 != null) {
        let val1 = p1 === null ? 0 : p1.val;
        let val2 = p2 === null ? 0 : p2.val;
        let sum = carry + val1 + val2
        if (sum >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }
        hp.next = new ListNode(sum % 10);
        hp = hp.next;
        p1 = p1 != null ? p1.next : null;
        p2 = p2 != null ? p2.next : null;
    }
    if (carry > 0) {
        hp.next = new ListNode(carry);
    }
    
    return head.next;
    
};