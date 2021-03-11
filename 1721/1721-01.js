var swapNodes = function(head, k) {
    let curr = head;
    let values = [];
    
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }
    
    const il = k - 1;
    const ir = values.length - k;
    const vl = values[il];
    const vr = values[ir];
    
    curr = head;
    let i = 0;
    while (curr) {
        if (i === il) curr.val = vr;
        if (i === ir) curr.val = vl;
        i++;
        curr = curr.next;
    }
    return head;
};
