var maximum69Number  = function(num) {
    const res = num.toString().split("");
    for (const [i, c] of res.entries()) {
        if (c === "6") {
            res[i] = "9"
            break;
        }
    }
    
    return parseInt(res.join(""));
};
