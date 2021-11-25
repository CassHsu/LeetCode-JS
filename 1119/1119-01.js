var removeVowels = function(s) {
    const arr = [];
    const vowels = ["a", "e", "i", "o", "u"];
    
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            arr.push(s[i]);
        }
    }
    
    return arr.join("");
};
