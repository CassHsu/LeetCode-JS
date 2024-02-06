var findWordsContaining = function(words, x) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.includes(x)) {
            ans.push(i);
        }
    }

    return ans;
};
