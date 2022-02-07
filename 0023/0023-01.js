var mergeKLists = function(lists) {
    let head = new ListNode();
    let curr = head;
    const nodes = [];
    
    lists.forEach(ll => {
        while (ll) {
            nodes.push(ll.val);
            ll = ll.next;
        } 
    });
    
    nodes.sort((a, b) => a - b);
    nodes.forEach(n => {
        curr.next = new ListNode(n);
        curr = curr.next;
    });
    
    return head.next
};
