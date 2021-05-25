var findTheDifference = function(s, t) {
    if (s === "") return t;
    
    let st = s + t;
    let r = s.charCodeAt(0);
    
    for (let i = 1; i < st.length; i++) {
        r ^= st.charCodeAt(i);
    }
    return String.fromCharCode(r);
};
