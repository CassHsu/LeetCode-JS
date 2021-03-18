var reverseList = function(head) {
    if (!head || !head.next) return head;
    
    let rlh = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return rlh;
};
