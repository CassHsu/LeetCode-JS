function reverseOnlyLetters(s: string): string {
    const ret = [];
    const ss = s.split("");
    const letters = [];
    
    const isalpha = (c: string) => {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }
    
    ss.forEach(c => {
        if (isalpha(c)) letters.push(c)
    });
    
    ss.forEach(c => {
        if (isalpha(c)) {
            ret.push(letters.pop());
        } else {
            ret.push(c);
        }
    });
    
    return ret.join("");
};
