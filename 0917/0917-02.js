var reverseOnlyLetters = function(s) {
    const ret = [];
    const letters = [];
    const ss = s.split("");
    
    const isalpha = (c) => {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }
    
    ss.forEach(c => {
        if (isalpha(c)) letters.push(c);
    });
    
    ss.forEach(c => {
        if (isalpha(c)) {
            ret.push(letters.pop());
            
        } else {
            ret.push(c);
        }
    });
    
    return ret.join("")
};
