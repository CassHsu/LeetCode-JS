var mergeAlternately = function(word1, word2) {
    let w1 = word1.length;
    let w2 = word2.length;
    let i = 0;
    let res = "";

    while (i < w1 || i < w2) {
        if (i < w1) res += word1[i];
        if (i < w2) res += word2[i];

        i++;
    }

    return res;
};
