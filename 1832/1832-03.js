var checkIfPangram = function(sentence) {
    return "abcdefghijklmnopqrstuvwxyz".split("").every(s => sentence.includes(s));
};
