var canBeTypedWords = function(text, brokenLetters) {
    const texts = text.split(" ");
    let ans = texts.length;
    if (brokenLetters === "") return ans;
    
    texts.forEach(t => {
        for (let i = 0; i < brokenLetters.length; i++) {
            if (t.includes(brokenLetters[i])) {
                ans--;
                break;
            }
        }
    });
    
    return ans;
};
