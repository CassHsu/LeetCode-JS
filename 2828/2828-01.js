var isAcronym = function(words, s) {
    let w = "";
    for (const word of words) {
        w += word[0];
    }

    return w === s;
};
