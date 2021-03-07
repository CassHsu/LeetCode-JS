var deleteDuplicates = function(head) {
    let ite = head;
    while (ite) {
        let tmp = ite.next;
        while (tmp && tmp.val === ite.val) {
            tmp = tmp.next;
        }
        
        ite.next = tmp;
        ite = ite.next;
    }
    return head;
};
