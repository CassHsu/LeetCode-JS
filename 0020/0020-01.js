var isValid = function(s) {
    if (s.length == 0) return true;
    
    const m = new Map();
    m.set('(', ')');
    m.set('[', ']');
    m.set('{', '}');
    
    const stack = [];
    
    for (const c of s) {
        const size = stack.length;
        if (size > 0 && m.get(stack[size - 1]) == c) {
            stack.pop();
        } else {
            stack.push(c);
        }
        
    }
    
    return stack.length == 0;
};
