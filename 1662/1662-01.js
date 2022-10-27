
var arrayStringsAreEqual = function(word1, word2) {
    const w1 = word1.reduce((acc, cur) => acc += cur, "");
    const w2 = word2.reduce((acc, cur) => acc += cur, "");
    return w1 === w2;
};
