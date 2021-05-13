var replaceDigits = function(s) {
    return s.split("").map((c, i) => {
        if (isNaN(c)) return c;
        else {
            return String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(c));
        }
    }).join("");
};
