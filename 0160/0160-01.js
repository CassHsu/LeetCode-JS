var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null;
    
    let a = headA;
    let b = headB;
    
    while (a != b) {
        a = a? a.next: headB;
        b = b? b.next: headA;
    }
    return a;
};
